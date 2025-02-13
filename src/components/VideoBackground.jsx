import React, { useEffect, useRef } from 'react'

const VideoBackground = ({ videoSource, children }) => {
  const videoRef = useRef(null)

  useEffect(() => {
    // Debug log to check if video source is loaded
    console.log('Video source:', videoSource)
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Video autoplay failed:', error)
      })
    }
  }, [videoSource])

  return (
    <div className="video-section">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className="background-video"
      >
        <source src={videoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div className="content">
        {children}
      </div>
    </div>
  )
}

export default VideoBackground 