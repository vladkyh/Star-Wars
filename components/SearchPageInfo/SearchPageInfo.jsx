import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './SearchPageInfo.module.css';
const SearchPageInfo = ({people}) => {
  return (
    <>{people.length
        ?(<ul className={styles.list__container}>
            {people.map(({name, img, id}) => 
              <li className={styles.list__item} key={id}>
                <Link className={styles.list__a} to={`/people/${id}`}>
                    <img className={styles.person__photo} src={img} alt={name} />
                    <p className={styles.person__name}>{name}</p>
                </Link>
              </li>
            )}
          </ul>)
        : <h2 className={styles.person__comment}>No result</h2>  
        }
    </>
  );
}

export default SearchPageInfo;
