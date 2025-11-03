import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import SignOut from './pages/SignUp';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute'

export default function App() {
  return <BrowserRouter>
  <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<SignOut />} />
      <Route element={<PrivateRoute />} />
    </Routes> 
    
        </BrowserRouter>
}
