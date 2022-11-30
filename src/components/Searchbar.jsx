import React from 'react'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/search?q=${searchTerm}`)
    }

  return (
      <form onSubmit={handleSubmit}>
          <label htmlFor="search" className='hidden sm:inline text-xl'>Search</label>{" "}
          <input className='border border-gray-500 outline-none rounded-sm sm:p-1 sm:w-56'
              type="text"
              id='search'
              placeholder=' Search'
              value={searchTerm}      
              onChange={(e) => setSearchTerm(e.target.value)}
          />
    </form>
  )
}

export default Searchbar