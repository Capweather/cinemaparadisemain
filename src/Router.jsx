import { Route, Routes } from 'react-router-dom';
import Home from './containers/Home';
import Categories from './containers/Categories'
import Favorite from './containers/Favorite'

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/categories" element={<Categories/>}/>
            <Route path="/preview/:id/" element={<Home/>}/>
            <Route path="/favorites" element={<Favorite/>}/>
        </Routes>
    );
};
export default Router;
