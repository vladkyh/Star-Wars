import { NavLink, Link } from 'react-router-dom';
import Favorite from '../Favorites/Favorite';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

import imgDroid from '@static/droid.svg';
import imgLightsaber from '@static/lightsaber.svg';
import imgSpaceStation from '@static/space-station.svg';

import { useTheme,THEME_LIGHT,THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';


const Header = () => {
  const [icon, setIcon] = useState(null);
  const isTheme = useTheme();
  useEffect(() => {
    switch (isTheme.theme) {
      case THEME_LIGHT:
          setIcon(imgLightsaber);
        break;

      case THEME_DARK:
          setIcon(imgSpaceStation);
        break;

      case THEME_NEUTRAL:
          setIcon(imgDroid);
        break;
    
      default:setIcon(imgSpaceStation)
        break;
    }
  
    
  }, [isTheme]);
  
  return (
    <>
    
       <div className={styles.container}>
          <img className={styles.logo} src={icon} alt="icon" />
          <ul className={styles.header__linkgroup}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/people/?page=1" >People</NavLink></li>
            <li><NavLink to="/notfound" end>Not found</NavLink></li>
            <li><NavLink to="/fail" end>Fail</NavLink></li>
            <li><NavLink to="/search" end>Search</NavLink></li>
          </ul>
          <Favorite/>
       </div>
    </>
  );
}

export default Header;
