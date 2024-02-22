import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import MovieDetails from "./components/movieDetails";
// import Header from "./components/header";
// import SearchPage from "./components/search";
// import FavoritePage from "./components/fav";
// import AddUser from "./components/register";
import { DirectionContext, LanguageContext } from "./context/language";
import { useState } from 'react';
import Loader from "./components/loader";
import { PageContext } from "./context/pages";
//spliting
const MovieList = React.lazy(() => import('./components/movieList'));
const MovieDetails = React.lazy(() => import('./components/movieDetails'));
const Header = React.lazy(() => import('./components/header'));
const SearchPage = React.lazy(() => import('./components/search'));
const FavoritePage = React.lazy(() => import('./components/fav'));
const AddUser = React.lazy(() => import('./components/register'));


function App() {
  const [language, setLanguage] = useState('en')
  const [direction, setDirection] = useState('ltr')
  const [page,setPage] = useState(1)
  return (
    
    <Router>
      <Suspense fallback={<Loader/>}>
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <DirectionContext.Provider value={{direction,setDirection}}>
      <Header />
      <PageContext.Provider value={{page,setPage}}>
      <SearchPage></SearchPage>
      <Routes>
     
        <Route path="/" element={<MovieList />} />
        {/* <Route path="/page/:page" element={<MovieList />} /> */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/fav" element={<FavoritePage />} />
        <Route path="/register" element={<AddUser />} />
         
      </Routes>
      </PageContext.Provider>
      </DirectionContext.Provider>
      </LanguageContext.Provider>
      </Suspense>
    </Router>
   
  );
}

export default App;
