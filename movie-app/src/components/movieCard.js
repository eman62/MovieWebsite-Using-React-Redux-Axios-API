
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, decreaseCounter, increaseCounter, removeFromCart } from './store/slices/counter';

const MovieCard = ({ data }) => {
  const movieArray = useSelector(state => state.counter.cart_items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isHeartClicked = movieArray.some(movie => movie.id === data.id);

  const handleCardClick = () => {
    navigate(`/movie/${data.id}`);
  };

  const handleHeartClick = (e) => {
    e.stopPropagation();

    if (!isHeartClicked) {
      dispatch(addToCart(data));
      dispatch(increaseCounter());
    } else {
      dispatch(removeFromCart(data));
      dispatch(decreaseCounter());
    }
  };

  return (
    <div
      className="card h-100"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        className="card-img-top"
        alt={data.title}
      />
      <div className="card-body">
        <h5 className="card-title">{data.title}</h5>
        <p className="card-text">{data.release_date}</p>
        <p>Rating: {data.vote_average} </p>
        <div className="heart-icon" onClick={handleHeartClick}>
          <FontAwesomeIcon icon={faHeart} style={{ color: isHeartClicked ? "red" : "lightgray" }} />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
