import React from 'react'
import {useState, useEffect} from 'react'
import RecipeList from '../components/RecipeList'

// http://localhost:3000/recipes

function Home() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then((res) => res.json())
    .then((data) => setData(data))
  }, [])
  return (
    <div>
      {data && <RecipeList data={data} />}
    </div>
  )
}

export default Home