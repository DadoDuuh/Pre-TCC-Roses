import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Scheduled from './pages/scheduled inquiries/Scheduled';
import Archived from './pages/archived queries/Archived';
import Mark from './pages/mark/Mark';
import Notes from './pages/notes/Notes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/arquivadas' element={<Archived/>}/>
        <Route path='/marcadas' element={<Scheduled/>}/>
        <Route path='/marcar' element={<Mark/>}/>
        <Route path='/anotacoes' element={<Notes/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);