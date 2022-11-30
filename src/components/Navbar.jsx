import React from 'react'
import {NavLink} from 'react-router-dom'
import Searchbar from './Searchbar'

function Navbar() {
  const activeClass = ({isActive}) => {
    return  {
    color: isActive ? '#F05B3C' : 'black'
   } 
  }
  return (
    <nav className='flex items-center justify-between h-12 mb-10'>
      <NavLink style={activeClass} to='/' className='text-2xl font-bold'>Apple Recipe</NavLink>
      <Searchbar />
      <NavLink style={activeClass} to='/create' className='font-medium text-center'>Create Recipe</NavLink>
    </nav>
  )
}

export default Navbar