import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
import { useStore } from '../../Store/store'


const Sidebar = () => {
    const inSideBar = useStore((state) => state.datas)

    const List = () =>{
        if(!!inSideBar[0]){
           const listNotes = inSideBar.map( note => (
                <Link to={`/Film/${note.id}`}>{note.title} <br/></Link>
           ))
        return(listNotes)
        }else{
            return(<p>Добавте понравившиеся фильмы в заметки</p>)
        }
    }

    return(
        <div className='sidebar'>
            <h2>Закладки</h2>
            <hr />
            <List/>
        </div>
    )
}

export default Sidebar;