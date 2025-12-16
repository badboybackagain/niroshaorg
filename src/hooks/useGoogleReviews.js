import { useState, useEffect } from 'react'

/**
 * Custom hook to fetch Google reviews
 * 
 * @param {string} reviewsUrl - URL to fetch reviews from (default: /reviews.json)
 * @returns {Object} - { reviews, loading, error }
 */
export const useGoogleReviews = (reviewsUrl = '/reviews.json') => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const response = await fetch(reviewsUrl)
        
        if (!response.ok) {
          throw new Error(`Failed to fetch reviews: ${response.status}`)
        }
        
        const data = await response.json()
        
        // Handle both formats: { reviews: [...] } or [...]
        const reviewsData = Array.isArray(data) ? data : (data.reviews || [])
        
        setReviews(reviewsData)
      } catch (err) {
        console.error('Error fetching Google reviews:', err)
        setError(err.message)
        // Don't set reviews to empty array on error - let component handle fallback
      } finally {
        setLoading(false)
      }
    }

    fetchReviews()
  }, [reviewsUrl])

  return { reviews, loading, error }
}
