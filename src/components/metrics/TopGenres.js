import React from 'react'
import { useSelector } from 'react-redux';

const TopGenres = () => {
  const movies = useSelector((state)=> state.movies.data);

  const allGenres = movies.show.genres.reduce((genres, show) => {
    return genres.concat(show);
  }, []);

  console.log(allGenres, 'adsfaskjdfklfdsakj')

  /* const topGeneres = () => {
    const geners = {};
    movies.forEach((item) => {
      item.show.genres.forEach((gener) => {
        if (gener in geners) geners[gener].push(item);
        else geners[gener] = [item];
      });
    });
    return geners;
  }; */

  return (
    <div>TopGenres</div>
  )
}

export default TopGenres