import style from './Detail.module.css'
import { useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Detail = () => {

    const { id } = useParams();

    let [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
        }, [id]);

    return(
        <div className={style.contenedor}>
            <div className={style.description}>
                <h1 className={style.nombre}>{character.name}</h1>
                <h1 className={style.data}>ESTATUS | {character.status}</h1>
                <h1 className={style.data}>GENDER | {character.gender}</h1>
                <h1 className={style.data}>SPECIE | {character.species}</h1>
                <h1 className={style.data}>ORIGIN | {character.origin && character.origin.name}</h1>
            </div>

            <div className={style.image}>
            <img src={character.image} className={style.imagen}></img>
            </div>
        </div>
    )
}

export default Detail