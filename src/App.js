import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import StarshipList from './pages/StarshipsList/StarshipList';
import StarshipDetails from './pages/StarshipDetails/StarshipDetails';
import Header from './components/Header/Header';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<StarshipList />}/>
        <Route path='/starship' element={<StarshipDetails />}/>
      </Routes>
    </>
  );
}

export default App;
