import React from 'react'

const PostFooter = () => (
  <footer>
    <div className='Post-caption'>
      <i className="far fa-heart"></i>
      <i className="far fa-comment"></i>
      <i style={{ marginLeft: 'auto' }} className="far fa-bookmark"></i>
    </div>
    <div className='Post-add-comment'>
      <p>Add Comment</p>
    </div>
  </footer>
)

export default PostFooter