import React from 'react'
import videos from '../../assets/videos/video.mp4'

const Video = () => {
  return (
    <div className='w-full h-screen '>
        <video className='w-full h-full object-cover' autoPlay muted loop src={videos} ></video>
    </div>
  )
}

export default Video