import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from './pages/layout/Layout';
import ListFilms from './pages/listFilms/ListFilms';
import SearchFilms from './pages/searchFilms/SearchFilms';
import Film from './pages/film/Film';
import { useState } from 'react';
import ThemeContext from './context/ThemeContext';

const Router = () => {
    const [notes, setNotes] = useState([])
    return(
        <ThemeContext.Provider value={[notes, setNotes]}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route path='/' element={<ListFilms/>}/>
                    <Route path='/SearchFilms' element={<SearchFilms/>}/>
                    <Route path='/Film/:id' element={<Film/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </ThemeContext.Provider>
    );
}

export default Router;