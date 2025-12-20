import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar';

function App() {
  

  return (
    <>
    <header>
      <h1>logo</h1>
      <NavBar />
    </header>
      <main>
        <Routes>
          <Route path='/home' element={<Home />}/>
        </Routes>
      </main>
      <footer>
        <p>fotter</p>
      </footer>
    </>
  )
}

export default App
