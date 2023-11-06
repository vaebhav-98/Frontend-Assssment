import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovies } from '../redux/slices/movies';
import FeaturedShows from '../components/FeaturedShows';
import AverageRating from '../components/metrics/AverageRating';
import ScheduleBreakdown from '../components/metrics/ScheduleBreakdown';
import TopGenres from '../components/metrics/TopGenres';

const Home = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.movies.isLoading);
    const isError = useSelector((state) => state.movies.isError);

    //Top 10 shows
    const movies = useSelector((state) => state.movies.data);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [dispatch]);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div>
            <FeaturedShows
                data={movies}
            />
            <div className='flex justify-between max-w-7xl px-6 lg:px-8 mx-auto'>
            <AverageRating />
            <ScheduleBreakdown />
            <TopGenres />
            </div>
        </div>
    )
}

export default Home