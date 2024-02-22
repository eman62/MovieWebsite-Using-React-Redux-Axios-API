import React, {useContext } from "react";
import { useSelector } from 'react-redux';
import MovieCard from './movieCard';
import { DirectionContext } from "../context/language";

const FavoritePage = () => {
  const movieArray = useSelector(state => state.counter.cart_items);
  const { direction} = useContext(DirectionContext);

  return (
    <div className="container mt-4" dir={direction}>
      <h2>Favorite Movies</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {movieArray.map((movie) => (
          <div className="col" key={movie.id}>
            <MovieCard data={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
