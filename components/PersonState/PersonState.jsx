import PropTypes from 'prop-types';
import styles from './PersonState.module.css';
const PersonState = ({peopleInfo, PersonName}) => {
    return (
        <>
          <div className={styles.wrapper}>
            <ul className={styles.info__container}>
              {peopleInfo.map(({title,info}) => (
                info&&(
                  <li className={styles.info__item} key={title}>
                    
                    <span className={styles.info__title}>{title} </span> :{info}
                    
                  </li>
                  )))}
            </ul>
          </div>
        </>
      );
    }
PersonState.propTypes = {
  PersonState: PropTypes.array
}
export default PersonState;
