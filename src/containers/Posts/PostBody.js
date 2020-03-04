import React from 'react'

const PostBody = ({ imageUrl }) => (
  <div className='Post-image'>
    <div className='Post-image-bg'>
      <img src={imageUrl} alt="" />
    </div>
  </div>
)

export default PostBody