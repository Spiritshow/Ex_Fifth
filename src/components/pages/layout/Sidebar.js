import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'


const Sidebar = () => {
    const [notes, setNotes] = useState([])

    const List = () =>{
        if(!!notes){
        const listNotes = notes.map( note => (
            <Link to={`/Film/${note.id}`}>{note.title}</Link>
        ))
        return({listNotes})
        }else{
            return(<p>Добавте понравившиеся фильмы в заметки</p>)
        }
    }

    return(
        <div className='sidebar'>
            <h2>Закладки</h2>
            <hr />
            {/* здесь должен быть список фильмов в закладках */}
            <List/>
            {/* {notes.map( note => (
                <Link to={`/Film/${note.id}`}>{note.title}</Link>
            ))} */}
        </div>
    )
}

export default Sidebar;