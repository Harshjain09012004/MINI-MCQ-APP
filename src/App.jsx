import { React } from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom';
import { Home } from './pages/home';
import MCQ from './components/mcq';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Quiz' element={<MCQ/>}/>
      </Routes>
    </>
  )
}

export default App
