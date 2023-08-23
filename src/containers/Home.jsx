import React, {useState, useEffect} from "react";
import { useSelector , useDispatch } from 'react-redux';
import { getMovies} from "../reducks/movies/selector";
import  API from "../API";
import MainImage from "../components/common/MainImage";
import Preview from '../components/common/preview';
import Left from "../assets/img/cl2.svg"
import Right from "../assets/img/cl21.svg"

import { addFavorite, fetchFromLocalStorage } from "../reducks/favorites/operations";
import { getFavorites } from "../reducks/favorites/selector";
import IconFav from '../assets/img/likeicon.png';
import { fetchMovies } from "../reducks/movies/operations";
// import IconLeft from '../assets/img/icon-left';
// import IconRight from '../assets/img/icon-right';

const api = new API();
const Home = () => {
    const [moviesComingSoon, setMoviesComingSoon] = useState(null);
    const [moviesNewReleased, setMoviesNewReleased] = useState(null);
    const [selectedMovieId,setSelectedMovieId] = useState(null);
    const [showPreview, setShowPreview] =  useState(false);
    const selector = useSelector(state => state);
    const dispatch = useDispatch();
    const favorites = getFavorites(selector);
    const clickfav = movie => {
        dispatch(addFavorite(movie));
    };
    const clickMovie = movieId => {
        setSelectedMovieId(movieId);
        setShowPreview(true)
    };

    useEffect(() => {
        
        api.getMovies({ release_type: 'Coming Soon'})
          .then((movies) => {
            setMoviesComingSoon(movies.results);
          })
          .catch((error) => {
            alert('movies/coming soon');
          })
        api.getMovies({ release_type: 'Newly Released'})
        .then((movies) => {
            setMoviesNewReleased(movies.results)
        })
          .catch(error => {
            alert('Failed to connect API:/movies/');
          })
    }, []);

    return(
        <>
           {showPreview && <Preview setShowPreview={setShowPreview} selectedMovieId={selectedMovieId} />}
           <section>
              <MainImage />
              <div class="list">
                <div class="left">
                    <hr/>
                    <div class="newly-rel">
            
                        <h2>Newly Released</h2>
                        <div className="arrowbtn">
                            <img src={Left} alt="" />
                            <img src={Right} alt="" />
                        </div>
                    

                    </div>
                    <hr/>
                </div>
                <ul>
                    {moviesNewReleased && moviesNewReleased.length > 0 ? (
                        moviesNewReleased.map(movie => (
                            <li key={movie.id}>
                                <div class="card">
                                    

                                       <img onClick={()=>clickMovie(movie.id)} class="image" src={'https://res.cloudinary.com/techis/' + movie.image_mobile} alt="" />
                                       
                        
                                <h1>{movie.name}</h1> 
                                <p>TV-MA | Action,Crime</p>
                                <a href={movie.trailer_link} target="_blank"><button>Watch Trailer</button></a>
                                </div>
                            </li>

                        ))
                    ): (
                        <p>No movies here yet ....</p>
                    )}
                </ul>
              </div>

              <div class="list">
                <div class="left">
                <hr/>
                    <div class="newly-rel">
                        
                        <h2>Upcoming Movies</h2>
                        <div className="arrowbtn">
                            <img src={Left} alt="" />
                            <img src={Right} alt="" />
                        </div>
                        
                    </div>
                    <hr />
                </div>
                <ul>
                    {moviesComingSoon && moviesComingSoon.length > 0 ? (
                        moviesComingSoon.map(movie => (
                            <li key={movie.id}>
                                <div class="card">


                                            <img onClick={()=>clickMovie(movie.id)} class="image" src={'https://res.cloudinary.com/techis/' + movie.image_mobile} alt="" />


                                   
                                
                                <h1>{movie.name}</h1>
                                <p>TV-MA | Action, Crime</p>
                                <a href={movie.trailer_link} target="_blank"><button>Watch Trailer</button></a>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p>No movies here yet...</p>

                    
                    )}
                </ul>
              </div>
           </section>
        
    
        </>
    );

                                
 } ;
export default Home;                         