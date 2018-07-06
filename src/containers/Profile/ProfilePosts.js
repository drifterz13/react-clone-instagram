import React from 'react'

const ProfilePosts = ({children}) => (
  <div style={{ marginTop: '20px' }}>
    <article>
      <div className='row'>
        {children}
      </div>
    </article>
  </div>
)

export default ProfilePosts