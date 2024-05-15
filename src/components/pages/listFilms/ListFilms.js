import React, {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import './ListFilms.css'
import Card from './component/Card';
const ListFilms = () => {
    const [films, setFilms] = useState([]);
    const [pos, setPos] = useState('1')
    const navigate = useNavigate()

    useEffect(() =>{
    fetch('https://raw.githubusercontent.com/Spiritshow/Value_Films/main/Value_films.json')
        .then(response => response.json())
        .then(data => setFilms(data));
    },[])

    useEffect(()=>{
        
//переделать
        if(pos === '1'){
            const ascendingFilms = [...films].sort((a, b) => a.rating - b.rating);
            setFilms([...[],...ascendingFilms]);
        }else{
            const descendingFilms = [...films].sort((a, b) => b.rating - a.rating);
            setFilms([]);
            setFilms([...[],...descendingFilms]);
        }
    },[pos])

    const GoToSearchFilm = () => {
        navigate('/SearchFilms');
    }

    const handleChange = (event) => {
        return(event.target.value === '1' ? setPos('1') : setPos('2'))
    }

    const List = () =>{
        if(!!films.length){
            return(films.map(film => (
            <Card props={film}/>)))}
        else 
            return(<h4>Загрузка...</h4>)
    }

    return(
        <div className='listfilms'>
            <h1>Список Фильмов</h1>
            <hr />
            <div className='button_line'>
                <button onClick={GoToSearchFilm}> Поиск </button>
                <select onChange={handleChange}>
                    <option value='1' >По взрастанию рейтинга</option>
                    <option value='2' >по убыванию рейтинга</option>
                </select>
            </div>
            <List/>
        </div>
    )
}
export default ListFilms;