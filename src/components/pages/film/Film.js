import React from 'react'
import { useParams } from 'react-router-dom'


const Film = () => {

    const param = useParams();

    return(
        <h1>{param.id}</h1>
    )
}

export default Film;