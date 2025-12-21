import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/home/Home';
import NavBar from './components/navbar/NavBar';
import SearchBar from './components/searchbar/SearchBar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import VerifyAccount from './verify/verify';

function App() {
  return (
    <>
      <header>
        <h1>logo</h1>
        <SearchBar />
        <NavBar />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify/:token" element={<VerifyAccount />} />
        </Routes>
      </main>

      <footer>
        <p>footer</p>
      </footer>
    </>
  );
}

export default App;
