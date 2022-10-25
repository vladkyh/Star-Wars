import { useLocation } from 'react-router';
import img from '@static/notfound.png';
import styles from './NotFoundPage.module.css';
const NotFoundPage = () => {

    let location = useLocation();
    

  return (
    <>
        <img className={styles.img} src={img} alt="not found" />
        <p className={styles.text}> Не найдена странциа с url: <strong>"{location.pathname}"</strong></p>
        
    </>
  );
}

export default NotFoundPage;
