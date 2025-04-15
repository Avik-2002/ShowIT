import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import RecommendedMovies from './components/RecommendedMovies';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <RecommendedMovies />
    </div>
  );
}

export default App;