import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';

const ListFilms = () => {
    const [films, setFilms] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/Spiritshow/Value_Films/main/Value_films.json')
        .then(response => response.json())
        .then(data => setFilms(data));
    })

    return(
        <div>
            <h1>Список Фильмов</h1>
            <hr />
            <button> Поиск </button>
            <ul>
                {films.map(film => (
                    <div>
                        <li key={film.id}>{film.title}</li>
                        <Link to={`/Film/${film.id}`}>go</Link>
                    </div>
                ))}
            </ul>
        </div>
    )
}
export default ListFilms;