import React, { useState ,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFavorites } from '../reducks/favorites/selector';
import { deleteFavorite,fetchFromLocalStorage } from '../reducks/favorites/operations';
import Preview from '../components/common/preview';
import Header from '../components/common/Header';
import IconFav from '../assets/img/icon-fav.png'

const Favorite = () => {

    const dispatch = useDispatch();
    const selector = useSelector(state => state);
    const[showPreview , setShowPreview] = useState(false);
    const [selectedMovieId , setSelectedMovieId] = useState(null);
    const favorites = getFavorites(selector);
    const clickMovie = movieId => {
        setSelectedMovieId(movieId);
        setShowPreview(true);

    }

    useEffect(()=>{
        dispatch(fetchFromLocalStorage());
    });

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
          <h1>Favorites List</h1>
          <hr />
        </div>
        <ul>
        {favorites && favorites.length > 0 ? (
            favorites.map(favorite => (
              <li>
                <div className="card">
                    <ing className = "fav" onClick = {()=>{
                        dispatch(deleteFavorite(favorite.id))
                    }}
                    src={IconFav}/>
                    <img onClick = {()=> clickMovie(favorite.id)}
                    className = "image"
                    src={
                        "http://res.cloudinary.com/techis/" +
                        favorite.image_mobile
                      }
                      />
                </div>
                
                <h1>{favorite.name}</h1>
                <p>TV-MA | Action ,crime</p>
                <a href = {favorite.trailer_link} target ="_blank"><button>Watch Trailer</button></a>
              </li>
            ))
         
        ) : (
            <p>No movies here yet ...</p>
            )}
            </ul>
          </div>
       
    </section>
  </>
  );
}

export default Favorite