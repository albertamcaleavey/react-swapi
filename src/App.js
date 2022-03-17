import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import StarshipList from './pages/StarshipsList/StarshipList';

function App() {
  return (
    <>
      <Routes>
        <Route path='starship-list' element={<StarshipList />}/>
      </Routes>
    </>
  );
}

export default App;
