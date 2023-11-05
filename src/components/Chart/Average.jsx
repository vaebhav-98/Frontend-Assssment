import React from "react";
import { useSelector } from "react-redux";

const Average = () => {
  const movies = useSelector((state) => state.movies.data);
  const findAverage = () => {
    const ratings = movies.map((item) => Number(item.show.rating.average));
    return ratings.reduce((a, b) => a + b, 0) / ratings.length;
  };
  const weeklyBreakdown = () => {
    const weeks = {
      Saturday: [],
      Sunday: [],
      Monday: [],
      Tuesday: [],
      Wednesday: [],
      Thursday: [],
      Friday: [],
    };
    movies.forEach((item) => {
      item.show.schedule.days.forEach((day) => {
        weeks[day].push(item);
      });
    });
    return weeks;
  };
  const topGeneres = () => {
    const geners = {};
    movies.forEach((item) => {
      item.show.genres.forEach((gener) => {
        if (gener in geners) geners[gener].push(item);
        else geners[gener] = [item];
      });
    });
    return geners;
  };
  console.log({
    findAverage: findAverage(),
    weeklyBreakdown: weeklyBreakdown(),
    topGeneres: topGeneres(),
  });
  return <div>Average</div>;
};

export default Average;
