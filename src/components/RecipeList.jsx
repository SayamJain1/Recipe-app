import React from 'react'
import {Link} from 'react-router-dom'

function RecipeList({ data }) {
  return (
    <div className='flex items-center justify-center md:justify-between gap-5 flex-wrap'>
          {data && data.map((recipe) => ( 
              <div key={recipe.id} className='w-96 h-[280px] bg-slate-100 p-8'>
                  <h1 className='font-medium text-xl mb-2'>{recipe.title}</h1>
                  <p className='text-gray-700 font-medium mb-5'>{recipe.cookingTime} to cook</p>
                  <p className='mb-8'>{recipe.method.substring(0, 100)}...</p>
                  <Link className='bg-red-500 p-2 rounded-sm text-white' to={`/recipe/${recipe.id}`}>See Recipe</Link>
              </div>
          ))}
    </div>
  )
}

export default RecipeList