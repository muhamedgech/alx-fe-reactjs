import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Logos Section */}
      <div className="flex space-x-10 mb-10">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="w-24 h-24" alt="React logo" />
        </a>
      </div>
      
      {/* Main Header */}
      <h1 className="text-[24px] text-red-500 font-semibold mb-5 text-center">Vite + React</h1>
      {/* Button Section */}
      <div className="flex flex-col items-center">
        <button 
          onClick={() => setCount(count + 1)} 
          className="px-6 py-3 bg-blue-900 text-white rounded-lg shadow-md hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 mb-5"
        >
          count is {count}
        </button>
        <p className="text-lg text-center">
          Edit <code className="font-mono text-blue-600">src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer Section */}
      <p className="mt-5 text-center text-lg text-gray-600">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
