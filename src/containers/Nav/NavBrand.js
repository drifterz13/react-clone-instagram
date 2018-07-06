import React from 'react'
import { Link } from 'react-router-dom'

const NavBrand = () => (
  <div className='Nav-brand'>
    <Link className='Nav-brand-logo' to='/'>
      Instagram
    </Link>
  </div>
)

export default NavBrand
