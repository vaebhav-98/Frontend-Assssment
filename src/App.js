import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from './redux/slices/movies';
import { Card } from '@mui/material';
import FeaturedShows from './components/FeaturedShows';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
/*   const dispatch = useDispatch();
  const state = useSelector((state) => state.movies);

  if (state.isLoading) {
    return <h1>Loading...</h1>
  }

  console.log(state.data) */

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
