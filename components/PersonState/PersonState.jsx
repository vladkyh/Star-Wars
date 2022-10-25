import PropTypes from 'prop-types';
import styles from './PersonState.module.css';

const PersonState = ({peopleInfo, PersonName}) => {
    return (
        <>
          <ul className={styles.people__info}>
            {peopleInfo.map(({title,info}) => (
              info&&(
                <li key={info}>
                  
                  <span>{title}: {info}</span>
                  
                </li>
                )))}
          </ul>
        </>
      );
    }
PersonState.propTypes = {
  PersonState: PropTypes.array
}
export default PersonState;
