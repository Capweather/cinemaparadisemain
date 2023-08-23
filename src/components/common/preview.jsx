import React, { useState, useEffect} from 'react';
import API from '../../API';
import { useDispatch } from 'react-redux';
// import { push } from 'connected-react-router';
import CloseButton from '../../assets/img/closebutton.png';

const api = new API();

const Preview = ({setShowPreview, selectedMovieId}) => {
    const [movie, setMovie] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        api.getMovies(selectedMovieId)
         .then(movie => {
            setMovie(movie);
         })
         .catch(error => {
            alert('Failed to connect API: /movie/:id/');
         });
    }, []);

    console.log('movie', movie);


return (
    <>
    
      <section class="preview">
        {movie && (
            <div class="opacity"> 
             <img class="icon-close" src={CloseButton} onClick = {() => setShowPreview(false)} alt="" />
             <img class="background2" src={movie.image} alt="" />
            <div class="preview-content">
                <div class="preview-img">
                    <img class="preview" src={movie.image} alt="" />
                </div>
                <div class="preview-text">
                    <h1>{movie.name}</h1>
                    <p>Movie</p>
                    <h4>{movie.rating}</h4>
                    <p>{movie.movie_duration} Minuites-USA</p>
                    <div class="preview-buttons">
                        <button>Action</button>
                        <button>Crime</button>
                        <button>Drama</button>
                        <button>Fantasy</button>
                        <button>Thriller</button>
                    </div>
                    <p>{movie.description}</p>
                    <a href={movie.trailer_link} target="_blank"><buttom class="preview-play">Play Now</buttom></a>

        
                </div>




            </div>


            
            </div>
        )}
        
      </section>

    
    
    
    
    
    </>
);

        };

export default Preview;
       



  