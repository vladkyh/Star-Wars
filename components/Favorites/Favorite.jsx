import bookmark from '@static/bookmark.svg';
import bookmark_null from '@static/bookmark-null.svg';
import { Link } from 'react-router-dom';
import FavoritePage from '@containers/FavoritePage/FavoritePage';
import styles from './Favorite.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const Favorite = () => {
  const [count, setcount] = useState(null);
  const [test, settest] = useState(null);
  const storeData = useSelector(state => state.favorite);
  
 useEffect(() => {
   const length = Object.keys(storeData).length;
   setcount(length);
   length.toString().length > 2 ? setcount('...') : setcount(length) ;
   
    
 });

    
 

  return (
    <div className={styles.container}>
       <Link to="/favorites" >
        
        <span className={styles.counter}>{count}</span>
        <img src={count ? bookmark : bookmark_null} alt="bookmark" className={styles.bookmark} />
        </Link>
      
    </div>
  );
}

export default Favorite;
