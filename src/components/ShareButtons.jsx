import React from 'react'
import { FiShare2, FiFacebook, FiTwitter, FiLinkedin, FiMessageCircle } from 'react-icons/fi'

const ShareButtons = ({ url, title, description }) => {
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || title)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
  }

  const handleShare = (platform) => {
    const shareUrl = shareLinks[platform]
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400')
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      alert('Link copied to clipboard!')
    }).catch(() => {
      alert('Failed to copy link')
    })
  }

  return (
    <div className="share-buttons">
      <div className="share-buttons-label">
        <FiShare2 />
        <span>Share this article</span>
      </div>
      <div className="share-buttons-list">
        <button
          onClick={() => handleShare('facebook')}
          className="share-button share-facebook"
          aria-label="Share on Facebook"
        >
          <FiFacebook />
        </button>
        <button
          onClick={() => handleShare('twitter')}
          className="share-button share-twitter"
          aria-label="Share on Twitter"
        >
          <FiTwitter />
        </button>
        <button
          onClick={() => handleShare('linkedin')}
          className="share-button share-linkedin"
          aria-label="Share on LinkedIn"
        >
          <FiLinkedin />
        </button>
        <button
          onClick={() => handleShare('whatsapp')}
          className="share-button share-whatsapp"
          aria-label="Share on WhatsApp"
        >
          <FiMessageCircle />
        </button>
        <button
          onClick={handleCopyLink}
          className="share-button share-copy"
          aria-label="Copy link"
        >
          <FiShare2 />
        </button>
      </div>
    </div>
  )
}

export default ShareButtons


