import React, { useState, useEffect } from "react";
import "./App.css";
import MovieBox from "./Componant/MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
  Dropdown,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import MyAlert from "./Componant/MyAlert";

const API_URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=a16776e77d413e17d3d48b4e780334d0&language=fr-FR";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [genres, setGenres] = useState([]);
  const [setSelectedGenre] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a16776e77d413e17d3d48b4e780334d0&language=fr-FR"
    )
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      });

    fetch(`${API_URL}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        if (page === 1) {
          setMovies(data.results);
        } else {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }
      });
  }, [page]);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}&language=fr-FR`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  const filterMoviesByGenre = async (genreId) => {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=a16776e77d413e17d3d48b4e780334d0&language=fr-FR&with_genres=${genreId}`;
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
      setSelectedGenre(genreId);
    } catch (e) {
      console.error(e);
    }
  };

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Navbar bg="dark" expand="lg" variant="dark" className="fixed-top">
        <Container fluid>
          <Navbar.Brand href="/home">
            <FontAwesomeIcon
              icon={faFilm}
              className="large-icon"
              style={{ marginRight: "10px" }}
            />
          </Navbar.Brand>
          <Navbar.Brand href="/home">Film à la une</Navbar.Brand>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="category-dropdown">
              Catégorie
            </Dropdown.Toggle>
            <Dropdown.Menu className="bg-dark">
              {genres.map((genre) => (
                <Dropdown.Item
                  key={genre.id}
                  onClick={() => filterMoviesByGenre(genre.id)}
                  className="text-light"
                >
                  {genre.name}
                </Dropdown.Item>
              ))}
              <Dropdown.Item
                onClick={() => filterMoviesByGenre("")}
                className="text-light"
              >
                Tous
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="nabarScroll">
            <Nav
              className="me-auto my-2 my-lg-3"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex" onSubmit={searchMovie} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Film recherché"
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
              />
              <Button variant="secondary" type="submit">
                Trouver
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
            <div className="d-flex justify-content-center">
              <Button variant="primary" onClick={loadMoreMovies}>
                Charger plus
              </Button>
            </div>
          </div>
        ) : (
          <MyAlert />
        )}
      </Container>
    </>
  );
}

export default App;
