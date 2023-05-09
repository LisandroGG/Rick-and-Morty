import style from './Card.module.css';
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

const Card = (props) => {

   const {id, name, status, species, gender, image, onClose, origin, addFav, removeFav, myFavorites} = props

   const [ isFav, setIsFav ] = useState(false);

   useEffect(() => {
      myFavorites?.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   const handleFavorite = () => {
      // isFav ? removeFav(id) : addFav(props);
      // setIsFav(!isFav)
      if(isFav) {
         setIsFav(false)
         removeFav(id)
      } else {
         setIsFav(true)
         addFav(props)
      }
   };
   return (
      <div className={style.container}>
         <div className={style.containerCard}>
         {
            isFav ? (
               <button onClick={handleFavorite} className={style.fav}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={style.fav}>🤍</button>
            )
         }

         <button onClick={()=>{onClose(id)}} className={style.close}>X</button>
            <Link
            to={`/detail/${id}`}>
         <h2 className={style.nombre}>{name}</h2>
            </Link>  
         <h2 className={style.status}>{status}</h2>

         <h2 className={style.species}>{species}</h2>

         <h2 className={style.gender}>{gender}</h2>

         <h2 className={style.origin}>{origin.name}</h2>

         <img className={style.imagen}src={image} alt='' />

         </div>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav : (character) => dispatch(addFav(character)),
      removeFav : (id) => dispatch(removeFav(id))
   }
}


export default connect(mapStateToProps, mapDispatchToProps) (Card);
