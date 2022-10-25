import PropTypes from 'prop-types';
import styles from './PersonImg.module.css';
const PersonImg = ({personImg, PersonName}) => {
  return (
    <>
            <img src={personImg} alt={PersonName} />
    </>
  );
}
PersonImg.propTypes = {
  text: PropTypes.func
}
export default PersonImg;
