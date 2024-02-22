import React, { useState,useContext } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { DirectionContext } from "../context/language";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { direction} = useContext(DirectionContext);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      const apiKey = "077a516d1c056e2b8124d1e2b20d5df4";
      const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}&search_type=ngram&include_adult=false`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results || []);
        })
        .catch((error) => console.error("Error fetching search results:", error));
    }
  };

  const MovieCard = ({ movie }) => {
  return (
    <Card style={{ width: "16rem", height: "100%", margin: "10px" }} >
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        style={{ height: "70%" }}
      />
      <Card.Body style={{ height: "30%" }} >
        <Card.Title style={{ fontSize: "1rem" }}>{movie.title}</Card.Title>
        <Card.Text style={{ fontSize: "0.8rem" }}>Release Date: {movie.release_date}</Card.Text>
        <Card.Text style={{ fontSize: "0.8rem" }}>Vote Average: {movie.vote_average}</Card.Text>
      </Card.Body>
    </Card>
  );
};

  return (
    <Container className="bg-light" fluid dir={direction}>
      <Row>
        <Col>
          <header className="text-center" style={{ backgroundColor: "#f8f9fa" }}>
            <h1>Welcome to Our Movie App</h1>
            <p>Millions of Movies, TV Shows, and People to Discover. Explore Now!</p>
          </header>
          <br />
          <Row className="justify-content-center">
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter movie or TV show original title"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </Form.Group>
                <Button variant="primary" onClick={handleSearch}>
                  Search
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          {searchResults.length > 0 && (
            <Row xs={1} md={5} className="g-4">
              {searchResults.map((result) => (
                <Col key={result.id}>
                  <MovieCard movie={result} />
                </Col>
              ))}
            </Row>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
