
import { useState } from 'react';
import { useSelector } from 'react-redux';
import PeopleList from '@components/PeoplePage/PeopleList/PeopleList';
import styles from './FavoritePage.module.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
const FavoritePage = ({personName, personImg}) => {
    const storeData = useSelector(state => state.favorite)
    const [people, setPeople] = useState([])
    // щас буду писать аналог didmount чисто юзэффектом обойдусь
    useEffect(() => {
      const arr = Object.entries(storeData)
      if(arr.length){
        const res = arr.map(item =>{
          return{
            // данные посылаются в таком формате: нулевой элемент это айдишкник, первый это все остальные данные
            id: item[0],
            // name: item[1].name,
            // img: item[1].img
            // эти записи индентичны
            ...item[1]

          }
        })
        setPeople(res);
      }
    },[ ])
    
  return (
    <>
      <h1 className='header__text'>Favorite person</h1>
      {people.length
      ? <PeopleList people = {people}/>
      : <h1 className={styles.comment}>No data</h1>
      }
      
        
    </>
  );
}

export default FavoritePage;
