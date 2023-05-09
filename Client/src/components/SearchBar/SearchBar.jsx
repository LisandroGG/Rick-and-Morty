import { Link } from 'react-router-dom'
import style from './SearchBar.module.css'
import { useState } from 'react'

export default function SearchBar(props) {

   let [id, setId] = useState('')

   const handleChange = (event) => {
         // event.input, target hace referencia a ese input
      setId(event.target.value)
   }

   return (
      <div className={style.container}>

         <div className={style.containerInput}>

         <input type='search' className={style.input} onChange={handleChange} value = {id} placeholder='Ingresa el ID de un personaje'/>

         <div className={style.botones}>
         <Link to='/home'><button onClick={()=>props.onSearch(id)} className={style.btn}>Agregar</button></Link>
         <button onClick={()=>props.onSearch(Math.floor(Math.random() * 825))} className={style.random}>Random</button>

         <button onClick={props.logout} className={style.outButton}>Logout</button>
         </div>
         </div>


      </div>
   );
}
