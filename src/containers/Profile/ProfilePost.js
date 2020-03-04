import React from 'react'

const ProfilePost = ({ photo }) => {
  return (
    <div className='col-md-4'>
      <img className='img-thumbnail all-img' alt="" src={photo} />
    </div>
  )
}

export default ProfilePost