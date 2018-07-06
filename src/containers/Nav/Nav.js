import React from 'react'
import NavBrand from './NavBrand'
import NavInput from './NavInput'
import NavTab from './์NavTab'
import './Nav.css'

const Nav = () => (
  <nav className='Nav'>
    <div className='Nav-menus'>
      <NavBrand />
      <NavInput />
      <NavTab />
    </div>
  </nav>
)

export default Nav