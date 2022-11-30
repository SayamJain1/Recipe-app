import React from 'react'
import { useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import RecipeList from '../components/RecipeList'

function Search() {
  const [data, setData] = useState([])

  const queryString = useLocation().search
  // ?q=searchterm
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  useEffect(() => {
    fetch(`http://localhost:3000/recipes?q=${query}`)
      .then(res => res.json())
      .then(data => setData(data))
  },[])

  return (
    <div>
      <h2>Recipe including "{query}"</h2>
      {data && <RecipeList data={data} />}
    </div>
  )
}

export default Search