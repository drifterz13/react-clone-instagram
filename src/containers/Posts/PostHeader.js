import React from 'react'
import { Link } from '@reach/router'

const PostHeader = () => (
  <header>
    <div className='Post-user'>
      <Link to='/profile' className='Post-user-avatar'>
        <img src='https://picsum.photos/100/100?random' alt='picsum' />
      </Link>
      <Link to='/profile' className='Post-user-nickname'>
        <span>{'Mix'.toLowerCase()}</span>
      </Link>
    </div>
  </header>
)

export default PostHeader