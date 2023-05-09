import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const { onSearch, logout } = props;
    return (
        <div className={style.contenedor}>
            <SearchBar onSearch={onSearch} logout={logout}/>
            

            <div className={style.botones}>
            <Link
            to='/about'>
                <button className={style.btn}>About</button>
            </Link>
            <Link
            to='/home'>
                <button className={style.btn}>Home</button>
            </Link>
            <Link
            to='/favorites'>
                <button className={style.btnUno}>Favorites</button>
            </Link>
            </div>
        </div>
        
    )
}

export default Nav;