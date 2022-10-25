import { NavLink, Link } from 'react-router-dom';
import styles from './Header.module.css';
const Header = () => {
  return (
    <>
    
       <div className={styles.container}>
          <ul className={styles.header__linkgroup}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/people/?page=1" end>People</NavLink></li>
            <li><NavLink to="/notfound" end>Not found</NavLink></li>
            
            
            
          </ul>
       </div>
    </>
  );
}

export default Header;
