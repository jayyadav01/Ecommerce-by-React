import React from 'react'
import { useContext } from 'react'
import { globalstate } from './App'
import { Link } from 'react-router-dom';

function Header() {
    const {cart} = useContext(globalstate);
  return (
    <>
        <div className='nav'>
            <h1><Link to='/'>Logo</Link></h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Cart'>Cart <span>{cart.length}</span></Link></li>
            </ul>
        </div>
        <div className='blank'></div>
    </>
  )
}

export default Header
