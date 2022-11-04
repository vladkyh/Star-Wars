import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removePersonToFavorite, setPersonToFavorite } from '@store/actions';
import styles from './PersonImg.module.css';
import iconFavoriteActive from '@static/favorite-icon-active.svg'
import iconFavorite from '@static/favorite-icon.svg'
const PersonImg = ({
       personImg,
       peopleId,
       PersonName,
       personFavorite,
       setPersonFavorite
  
  }) => {
      
    const dispath = useDispatch();
  
    const dispatchFavoritePeople = () =>{
      if (personFavorite) {
        
        dispath(removePersonToFavorite(peopleId));
        setPersonFavorite(false);
      } else{
        dispath(setPersonToFavorite({
          [peopleId]:{
            name:PersonName,
            img:personImg
          }
        }))
        setPersonFavorite(true);
      }
    }


    return (
      <>  
              <div className={styles.conctainer}>
                <img className={styles.photo} src={personImg} alt={PersonName} />
                <img 
                  className={styles.favorite}
                  onClick={dispatchFavoritePeople}
                  src={personFavorite ? iconFavoriteActive : iconFavorite}
                  alt={personFavorite ?'Удалить из избранного' :'Добавить в избранное'}
               />
              </div>  
      </>
    );
}
PersonImg.propTypes = {
  peopleId: PropTypes.string,
  PersonName: PropTypes.string,
  personImg: PropTypes.string,
  personFavorite: PropTypes.bool,
  setPersonFavorite: PropTypes.func,
}
export default PersonImg;
