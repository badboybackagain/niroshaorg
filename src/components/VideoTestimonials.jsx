'use client'

import React from 'react'

const VideoTestimonials = () => {
  const playlistId = 'PLLF_YchGgxwbM5YAkkk2F9fPWM0NtqJID'
  const playlistUrl = `https://www.youtube.com/embed/videoseries?list=${playlistId}`

  return (
    <section className="section video-testimonials">
      <div className="container">
        <div className="video-testimonials-header">
          <h2 className="video-testimonials-title animate-fadeInUp">
            Success Stories in Motion: Watch Our Client Video Testimonials
          </h2>
          <p className="video-testimonials-subtitle animate-fadeInUp">
            Hear directly from businesses that have transformed their digital presence with Team Nirosha. Real clients, real results, real success stories.
          </p>
        </div>
        
        <div className="video-testimonials-wrapper animate-fadeInUp">
          <div className="video-testimonials-embed">
            <iframe
              src={playlistUrl}
              title="Client Video Testimonials - Team Nirosha"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoTestimonials
