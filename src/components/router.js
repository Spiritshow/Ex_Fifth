import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './pages/layout/Layout';
import ListFilms from './pages/listFilms/ListFilms';
import SearchFilms from './pages/searchFilms/SearchFilms';
import Film from './pages/film/Film';

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<ListFilms/>}/>
                    <Route path='/SearchFilms' element={<SearchFilms/>}/>
                    <Route path='/Film/:id' element={<Film/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;