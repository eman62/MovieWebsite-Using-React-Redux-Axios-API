import React, { useEffect, useState,useContext  } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../Apis/movies";
import { Container, Row, Col } from "react-bootstrap";
import { LanguageContext,DirectionContext } from '../context/language';


export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const {language} = useContext(LanguageContext)
  const {direction} = useContext(DirectionContext)
  

  const params = useParams();
  console.log(params);
  useEffect(() => {
    getMovieDetails(params.id,language)
      .then((res) => {
        console.log(res);
        setMovieDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, [params.id,language]);

  return (
    <Container dir={direction}>
      <h2 className="mt-4 mb-4">Movie Details</h2>
      <hr className="mb-4" />
      {movieDetails && movieDetails.genres && (
        <Row>
          <Col md={4}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              className="img-fluid"
            />
          </Col>
          <Col md={8}>
            <h4 style={{color:"blue"}}>{movieDetails.title}</h4>
            <h5>{movieDetails.overview}</h5>
            <p>Release Date: {movieDetails.release_date}</p>
            <p>
              Genres: {movieDetails.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>Rating: {movieDetails.vote_average} </p>
          </Col>
        </Row>
      )}
    </Container>
  );
}
