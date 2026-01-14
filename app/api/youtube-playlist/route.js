import { NextResponse } from 'next/server'

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const playlistId = searchParams.get('playlistId')

  if (!playlistId) {
    return NextResponse.json({ error: 'Playlist ID is required' }, { status: 400 })
  }

  // YouTube Data API v3 endpoint
  // Prefer server-side env var (YOUTUBE_API_KEY) for security, fallback to NEXT_PUBLIC_ for client-side usage
  const API_KEY = process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY

  if (!API_KEY) {
    // Return empty array if no API key - component will handle fallback
    return NextResponse.json({ videos: [] })
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${API_KEY}`
    )

    const data = await response.json()

    if (!response.ok) {
      console.error('YouTube API Error:', data)
      
      // Check if it's a referrer restriction error
      const isReferrerError = data.error?.errors?.some(
        err => err.reason === 'API_KEY_HTTP_REFERRER_BLOCKED' || 
               err.message?.includes('referer') ||
               err.message?.includes('referrer')
      )
      
      // Return error details for debugging
      return NextResponse.json({ 
        videos: [], 
        error: data.error?.message || 'Failed to fetch playlist',
        details: data.error,
        isReferrerError: isReferrerError,
        suggestion: isReferrerError 
          ? 'API key has referrer restrictions. Component will use iframe API fallback.'
          : 'Check API key permissions and restrictions in Google Cloud Console.'
      }, { status: response.status })
    }

    if (!data.items || data.items.length === 0) {
      return NextResponse.json({ videos: [] })
    }

    const videos = data.items.map((item) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail: item.snippet.thumbnails.maxres?.url || item.snippet.thumbnails.high?.url || item.snippet.thumbnails.default?.url,
      embedUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}?enablejsapi=1&origin=${process.env.NEXT_PUBLIC_SITE_URL || 'https://nirosha.org'}`,
    }))

    return NextResponse.json({ videos })
  } catch (error) {
    console.error('Error fetching YouTube playlist:', error)
    return NextResponse.json({ 
      videos: [], 
      error: error.message || 'Unknown error occurred' 
    }, { status: 500 })
  }
}
