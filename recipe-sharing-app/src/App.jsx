import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList' // Capitalize the component names
import AddRecipeForm from './components/AddRecipeForm' // Capitalize the component names

function App() {
  
  return (
    <>
      <div className='recipe'>
        
        <RecipeList />  {/* Capitalized */}
        <AddRecipeForm />  {/* Capitalized */}
      </div>
    </>
  )
}

export default App
