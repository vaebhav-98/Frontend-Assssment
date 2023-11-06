import React from 'react'
import { useSelector } from 'react-redux'
import Gauge from './Gauge';

const AverageRating = () => {
    const movies = useSelector((state) => state.movies.data);

   /*  const findAverage = () => {
        if (movies.length === 0) return 0;
        const ratings = movies.map((item) => Number(item.show.rating.average));
        const average = ratings.reduce((a, b) => a + b, 0) / ratings.length;
        return Math.round(average * 10) / 10;
    } */

    const getAverage = () => {
        if (movies.length === 0) return 0;
        // Extract the ratings from the 'movies' array
        const ratings = movies.map((movie) => movie.show.rating.average);
        // Filter out any null or undefined ratings
        const validRatings = ratings.filter((rating) => rating != null && !isNaN(rating));
        // Calculate the sum of valid ratings
        const sumOfRatings = validRatings.reduce((total, rating) => total + rating, 0);
        // Calculate the average rating
        const averageRating = sumOfRatings / validRatings.length;
        // Print the average rating
        console.log("Average Rating:", Math.round(averageRating * 10) / 10);
        return Math.round(averageRating * 10) / 10;
    }

    return (
        <div>
            <div>
                <h2>Average Rating</h2>
                {/* <Gauge value={findAverage()} min={0} max={10} />
                <p>Average Rating: {findAverage()}</p> */}
                <p>{getAverage()}</p>
            </div>
        </div>
    )
}

export default AverageRating