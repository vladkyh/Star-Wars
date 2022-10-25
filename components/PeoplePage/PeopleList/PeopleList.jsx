import cn from 'classnames'
import PropTypes from 'prop-types';
import styles from './PeopleList.module.css';
import { Link } from 'react-router-dom';
const PeopleList = ({people}) => {
  return (
    <>
    <ul className={styles.list__container}>
          {people.map(({name, img, id}) => 
            <li className={styles.list__item} key={id}>
              <Link className={styles.list__a} to={`/people/${id}`}>
                  <img className={styles.person__photo} src={img} alt={name} />
                  <p className={styles.person__name}>{name}</p>
              </Link>
            </li>
          )}
        </ul>
    </>
  );
}
PeopleList.propTypes = {
  people: PropTypes.array
}
export default PeopleList;
