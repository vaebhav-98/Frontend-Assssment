import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/slices/movies';
import FeaturedShows from '../components/FeaturedShows';

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.movies.isLoading);
    const isError = useSelector((state) => state.movies.isError);
    const movies = useSelector((state) => state.movies.data);


    useEffect(() => {
        dispatch(fetchMovies());
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    // console.log(movies)

    return (
        <div>
            <FeaturedShows
                data={movies}
            />
        </div>
    )
}

export default Home