import cn from 'classnames'
import styles from './ErrorMessage.module.css';
import gif from '@static/sobes.gif'
const ErrorMessage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text} >Технические шоколадки(</p>
      <img className={styles.gif} src={gif} alt="прошу прощения за то что гифка весит так много, но я не мог этого не вставить" />
    </div >
  );
}
export default ErrorMessage;
