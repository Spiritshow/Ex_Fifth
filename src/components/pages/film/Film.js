import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import './Film.css'


const Film = () => {
    const location = useLocation();
    const param = useParams();
    const prop = location.state;

    console.log(prop.id)
    return(
        <div className='CastomFilm'>
            <h1>{prop.title}</h1>
            <div>
                <div>
                <h3>Жанры:</h3>
                {prop.genres.map( genre => (
                    <h3>{genre}</h3>
                ))}
                </div>
                <h2>Рейтинг {prop.rating}</h2>
            </div>
            <h3>Описание: {prop.full_description}</h3>
            <div>
                <h4>В ролях: </h4>
                {prop.actors.map(actor =>(
                    <h4>{actor}</h4>
                ))

                }
            </div>
        </div>
    )
}

export default Film;