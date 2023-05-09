import style from './App.module.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About/About'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';

function App() {

   let [characters, setCharacters] = useState([])

   const { pathname } = useLocation(); 

   function onSearch(id) {
   axios(`http://localhost:3001/rickandmorty/character/${id}`)
   .then(({ data }) => {
      if (data.name) {
         setCharacters((characters) => [...characters, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}
   
   const onClose = (id) =>{
      setCharacters(
         characters.filter((character) => character.id !== Number(id)
      ))
   }
   const navigate = useNavigate()
   const [ access, setAccess ] = useState(false) 
   // const EMAIL = 'lisandro.pereyra123456@gmail.com';
   // const PASSWORD = 'lisikale1308';

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   const logout = () => {
      setAccess(false);
      navigate('/')
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);
   
   return (
      <div className= {style.contenedor}>
            { pathname !== '/' && <Nav onSearch = {onSearch} logout={logout}/>}
         <Routes>
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/home' element={<Cards characters= {characters} onClose= {onClose}/>} />
            <Route path='/about' element={<About />} />
            <Route path='detail/:id' element={<Detail />} />
            <Route path='/favorites' element={<Favorites />} />
         </Routes>
      </div>
   );
}
export default App;
