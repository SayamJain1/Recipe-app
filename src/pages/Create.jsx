import React from "react";
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIng, setNewIng] = useState('');
  const [Ingredients, setIngredients] = useState([])

  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault()
    
    fetch('http://localhost:3000/recipes', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        title: title,
        method: method,
        cookingTime: cookingTime + ' minutes',
        ingredients : newIng
      })
    })

    navigate('/')
  }

  const handleClick = (e) => {
    e.preventDefault()
    let ing = newIng.trim()

    if (ing && !Ingredients.includes(ing)) {
      setIngredients(prevIng => [...prevIng, ing])
    }

    setNewIng('')
  }

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-2 sm:w-[400px] min-h-[400px] flex items-center justify-center rounded-sm">
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-5">
          <label className="flex gap-1">
            <span>Title: </span>
            <input className="border-solid border-2 pl-1 flex-1" type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>

          <div className="flex items-center gap-2">
            <label>
              <span>Ingredients: </span>
              <input className="border-solid border-2 pl-1" type="text" value={newIng} onChange={(e) => setNewIng(e.target.value)}/>
            </label>
            <button onClick={handleClick} className="p-2 bg-red-400 rounded-sm">Add</button>
          </div>
          <div>{Ingredients.map(i => <span className="text-gray-700" key={i}>{i}, </span>)}</div>

          <label className="flex gap-1">
            <span>Method: </span>
            <textarea className="border-solid border-2 pl-1 flex-1" type="type" required value={method} onChange={(e) => setMethod(e.target.value)}/>
          </label>

          <label className="flex gap-1">
            <span>Cooking Time: </span>
            <input className="border-solid border-2 pl-1 flex-1" type="number" required value={cookingTime} onChange={(e) => setCookingTime(e.target.value)}/>
          </label>

          <button className="mt-4 p-2 bg-red-400 rounded-sm font-medium">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Create;
