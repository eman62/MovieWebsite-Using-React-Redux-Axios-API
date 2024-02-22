import React, { useContext } from 'react'
import { useEffect, useState } from "react";
import MovieCard from "./movieCard";
import { getMoviesList } from "../Apis/movies";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LanguageContext,DirectionContext } from '../context/language';
import { PageContext } from "../context/pages";

const MovieList =()=>{
  const [movies, setMovies] = useState([]);
  const {language} = useContext(LanguageContext)
  const {direction} = useContext(DirectionContext)

  const {page,setPage} = useContext(PageContext)
  const navigate = useNavigate();
   const handleButtonClick = () => {
    navigate("/register");
  };
    useEffect(() => {
    getMoviesList(page,language)
      .then((res) => {
        setMovies(res.data.results)
        console.log(res.data.results)
      })
      .catch((err) => console.log(err));
  }, [page,language]);

  //
  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  return (
    <>
   <div className="row row-cols-1 row-cols-md-5 g-4 m-3" dir={direction}>
    
      {movies.map((movie) => {
        return (
          <div className="col" key={movie.id}>
            <MovieCard data={movie} />
          </div>
        
        );
      })}
      <Button onClick={handleNextPage} style={{margin:"40px auto ", width:"10rem"}}>Next</Button>
      <span style={{margin:"40px auto "}}>page:  <span style={{color:"blue"}}>{page}</span> of <span style={{color:"blue"}}>42131</span> pages</span>
      <Button onClick={handlePreviousPage} style={{margin:"40px auto ", width:"10rem"}}>Previous</Button>
      <br></br>
      
    </div>
    <Button onClick={handleButtonClick} style={{margin:"40px auto ", display:'flex'}}>Register</Button>
    </>
  );
}

export default MovieList;