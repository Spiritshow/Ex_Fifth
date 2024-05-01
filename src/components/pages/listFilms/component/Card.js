import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './Card.css';

const Card = ({props}) => {

    const AddNote = () => {
        if(!!notes){
            setNotes(notes.push(props))
        }else{
            setNotes([props])
        }
        
    }

    return(
        <div className="Card">
            <div className="left_block">
                <Link to={`/Film/${props.id}`}>{props.title}</Link>
                <div className="Castom_genre">
                    <h6>Жанры: </h6>
                    {props.genres.map(genre => (
                        <h5>{genre} &emsp;</h5>
                    ))}
                </div>
                <div className="Castom_actors">
                    <h6>В ролях: </h6>
                    {props.actors.map(actor => (
                        <h5>{actor} &emsp;</h5>
                    ))}
                </div>
            </div>
            <div className="right_block">
                <button onClick={AddNote} className="">заметки</button>
                <h3>Рейтинг: {props.rating}</h3>
            </div>

        </div>
    )
}

export default Card;