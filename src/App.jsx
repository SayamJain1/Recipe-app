import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'

import Home from './pages/Home'
import Create from './pages/Create'
import Search from './pages/Search'
import Recipe from './pages/Recipe'

function App() {
  return (
    <div className=" w-screen h-full min-h-screen bg-gray-200 px-10 py-2">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/create' element={<Create />} />
        <Route path='/search' element={ <Search />} />
        <Route path='/recipe/:id' element={ <Recipe />} />
      </Routes>
    </div>
  )
}

export default App
