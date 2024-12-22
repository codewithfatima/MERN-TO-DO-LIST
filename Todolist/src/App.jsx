import React from 'react';
import { Route , Routes} from 'react-router-dom';
import Todolist from './components/Todolist';
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Todolist />}/> 

    </Routes>
   
    </>
  )
}

export default App;
