import React from 'react'

const PostBody = ({ post, i }) => (
  <div className='Post-image'>
    <div className='Post-image-bg'>
      <img src={post} alt={`ig${i}`} />
    </div>
  </div>
)

export default PostBody