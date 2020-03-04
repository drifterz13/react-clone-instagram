import React from 'react'
import { Link } from '@reach/router'

const NavTab = () => (
  <div className='Nav-tab'>
    <span className='Nav-explore'>
      <img src={require('../../images/explore.png')} alt='explore' />
    </span>
    <span>
      <i className="far fa-heart"></i>
    </span>
    <Link to='/profile' style={{ color: 'black' }}>
      <i className="far fa-user"></i>
    </Link>
  </div>
)

export default NavTab