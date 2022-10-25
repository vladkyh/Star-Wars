import PropTypes from 'prop-types';
import styles from './UiButton.module.css';
import cn from 'classnames'
import PeopleNavigation from '../../PeoplePage/PeopleNavigation/PeopleNavigation';
const UiButton = ({text,
   disabled, 
   onClick, 
   theme='dark',
   classes
}) => {
  return (
    <>
      <button onClick={onClick}
              disabled={ disabled}
              className={cn(styles.button, styles[theme], classes)}
      >
          {text}
        </button>
    </>
  );
}
UiButton.propTypes = {
  text : PropTypes.string,
  onClick : PropTypes.func,
  disabled : PropTypes.bool,
  theme : PropTypes.string
}
export default UiButton;
