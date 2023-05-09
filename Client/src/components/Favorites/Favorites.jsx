import { connect } from 'react-redux'
import Card from '../Card/Card'
import style from './Favorites.module.css'
import { filterCards, orderCards } from '../../redux/actions'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const Favorites = ({myFavorites}) => {

    const [aux, setAux] = useState(false)

    const dispatch = useDispatch()

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value))
    }

    return (
        <div className={style.fav}>
            <div className={style.filters}>
            <select className={style.select} onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>

            <select className={style.select} onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>

            </div>
            {
                myFavorites?.map(character => {
                    return (
                        <Card 
                        key = {character.id}
                        id = {character.id}
                        name = {character.name}
                        status = {character.status}
                        species = {character.species}
                        gender = {character.gender}
                        origin = {character.origin}
                        image = {character.image}
                        />
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null) (Favorites)