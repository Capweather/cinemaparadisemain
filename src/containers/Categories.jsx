import React, { useEffect, useState } from "react";
import { useSelector , useDispatch }from "react-redux";
import Header from "../components/common/Header";
import { getMovies } from "../reducks/movies/selector";
import API from "../API";
import { getFavorites } from "../reducks/favorites/selector";
import {
  addFavorite,
  fetchFromLocalStorage,
} from "../reducks/favorites/operations";
// import IconFav from "../assets/img/icon-fav.png";
import Preview from "../components/common/preview";

const api = new API();

const Categories = () => {
  const [categoryAnimated, setCategoryAnimated] = useState(null);
  const [categoryComedy, setCategoryComedy] = useState(null);
  const [categoryDrama, setCategoryDrama] = useState(null);
  const [categoryHorror, setCategoryHorror] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  const selector = useSelector((state) => state);
  const dispatch = useDispatch();
  const movies = getMovies(selector);
  const favorites = getFavorites(selector);
  const clickFav = (movie) => {
    dispatch(addFavorite(movie));
  };
  const clickMovie = (movieId) => {
    setSelectedMovieId(movieId);
    setShowPreview(true);
  };

  useEffect(() => {
    dispatch(fetchFromLocalStorage);
    api.getMovies({ category_id: '1' })
        .then(movies => {
            setCategoryAnimated(movies);
        })
        .catch(error => {
            alert('Failed to connect API: /movies/');
        });
    api.getMovies({ category_id: '2' })
        .then(movies => {
            setCategoryComedy(movies);
        })
        .catch(error => {
            alert('Failed to connect API: /movies/');
        });
    api.getMovies({ category_id: '3' })
        .then(movies => {
            setCategoryDrama(movies);
        })
        .catch(error => {
            alert('Failed to connect API: /movies/');
        });
    api.getMovies({ category_id: '4' })
        .then(movies => {
            setCategoryHorror(movies);
        })
        .catch(error => {
            alert('Failed to connect API: /movies/');
        });
}, []);
  return (
    <>
      {showPreview && (
        <Preview
          setShowPreview={setShowPreview}
          selectedMovieId={selectedMovieId}
        />
      )}
      <section>
        <Header />
        <div class="list">
          <div className="left">
            <hr />
            <h1>Newly Released</h1>
            <hr />
          </div>
          {categoryAnimated && categoryAnimated.results.length > 0 ? (
            <ul>
              {categoryAnimated.results.map((movie) => (
                <li>
                  <div className="card">
                    {movie &&
                      Object.values(favorites).filter(
                        (favoriteMovie) => movie.id == favoriteMovie.id
                      ).length === 0 && (
                        <img
                          onClick={() => clickMovie(movie.id)}
                          className="image"
                          src={
                            "http://res.cloudinary.com/techis/" +
                            movie.image_mobile
                          }
                        />
                      )}
                  </div>
                  <h1>{movie.name}</h1>
                  <p>TV-MA | Action ,crime</p>
                  <a href = {movie.trailer_link} target ="_blank"><button>Watch Trailer</button></a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-post">
              <p>No movies here yet ...</p>
            </div>
          )}
        </div>

        <div class="list">
          <div className="left">
            <hr />
            <h1>Animated</h1>
            <hr />
          </div>
          {categoryAnimated && categoryAnimated.results.length > 0 ? (
            <ul>
              {categoryAnimated.results.map((movie) => (
                <li>
                  <div className="card">
                    {movie &&
                      Object.values(favorites).filter(
                        (favoriteMovie) => movie.id == favoriteMovie.id
                      ).length === 0 && (
                        <img
                          onClick={() => clickMovie(movie.id)}
                          className="image"
                          src={
                            "http://res.cloudinary.com/techis/" +
                            movie.image_mobile
                          }
                        />
                      )}
                  </div>
                  <h1>{movie.name}</h1>
                  <p>TV-MA | Action ,crime</p>
                  <a href = {movie.trailer_link} target ="_blank"><button>Watch Trailer</button></a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-post">
              <p>No movies here yet ...</p>
            </div>
          )}
        </div>

        <div class="list">
          <div className="left">
            <hr />
            <h1>Romance</h1>
            <hr />
          </div>
          {categoryAnimated && categoryAnimated.results.length > 0 ? (
            <ul>
              {categoryAnimated.results.map((movie) => (
                <li>
                  <div className="card">
                    {movie &&
                      Object.values(favorites).filter(
                        (favoriteMovie) => movie.id == favoriteMovie.id
                      ).length === 0 && (
                        <img
                          onClick={() => clickMovie(movie.id)}
                          className="image"
                          src={
                            "http://res.cloudinary.com/techis/" +
                            movie.image_mobile
                          }
                        />
                      )}
                  </div>
                  <h1>{movie.name}</h1>
                  <p>TV-MA | Action ,crime</p>
                  <a href = {movie.trailer_link} target ="_blank"><button>Watch Trailer</button></a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-post">
              <p>No movies here yet ...</p>
            </div>
          )}
        </div>

        <div class="list">
          <div className="left">
            <hr />
            <h1>Crime</h1>
            <hr />
          </div>
          {categoryAnimated && categoryAnimated.results.length > 0 ? (
            <ul>
              {categoryAnimated.results.map((movie) => (
                <li>
                  <div className="card">
                    {movie &&
                      Object.values(favorites).filter(
                        (favoriteMovie) => movie.id == favoriteMovie.id
                      ).length === 0 && (
                        <img
                          onClick={() => clickMovie(movie.id)}
                          className="image"
                          src={
                            "http://res.cloudinary.com/techis/" +
                            movie.image_mobile
                          }
                        />
                      )}
                  </div>
                  <h1>{movie.name}</h1>
                  <p>TV-MA | Action ,crime</p>
                  <a href = {movie.trailer_link} target ="_blank"><button>Watch Trailer</button></a>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-post">
              <p>No movies here yet ...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Categories;
