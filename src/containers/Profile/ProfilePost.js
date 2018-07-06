import React from 'react'

const ProfilePost = (props) => {
  const { post, index } = props
  return (
    <div className='col-md-4'>
      <img className='img-thumbnail all-img' alt={`post${index}`} src={post} />
    </div>
  )
}

export default ProfilePost