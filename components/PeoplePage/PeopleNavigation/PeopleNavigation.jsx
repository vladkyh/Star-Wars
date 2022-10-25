
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import UiButton from '@ui-kit/UiButton';
import styles from './PeopleNavigation.module.css';
const PeopleNavigation = ({
    getResourse,
    PrevPage,
    NextPage, 
    CounterPage
  }) => {
    const handleChangeNext = () => getResourse(NextPage);
    const handleChangePrev = () => getResourse(PrevPage);
    return (
      <div className={styles}>
          
          <Link to={`/people/?page=${CounterPage-1}`} className={styles.button}>
              <UiButton
                text = 'Previos'
                disabled={!PrevPage}
                onClick={handleChangePrev}
              />
            </Link>
          <Link to={`/people/?page=${CounterPage+1}`} className={styles.button}>
            <UiButton
              text="Next"
              disabled={!NextPage}
              onClick={handleChangeNext}
            />
            </Link>

      </div>
    );
  }
PeopleNavigation.propTypes = {
  getResourse: PropTypes.func,
  PrevPage: PropTypes.string,
  NextPage: PropTypes.string,
  CounterPage: PropTypes.number
}
export default PeopleNavigation;
