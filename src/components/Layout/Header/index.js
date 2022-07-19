import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
        <Link to="/">
        <h2 className='header__title'>
            Free2Play
        </h2></Link>
        <div className='header__join'>
            Join Free
        </div>
    </div>
  )
}

export default Header