import { NavLink, Link } from 'react-router-dom';
import Favorite from '../Favorites/Favorite';
import styles from './Header.module.css';

const Header = () => {
  return (
    <>
    
       <div className={styles.container}>
          <ul className={styles.header__linkgroup}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/people/?page=1" >People</NavLink></li>
            <li><NavLink to="/notfound" end>Not found</NavLink></li>
          </ul>
          <Favorite/>
       </div>
    </>
  );
}

export default Header;
