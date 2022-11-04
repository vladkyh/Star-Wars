import PropTypes from 'prop-types';
import { useTheme,THEME_LIGHT,THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
import styles from './ChooseSide.module.css';
import cn from 'classnames';

import neutral  from '@static/falcon.jpg';
import  light from '@static/light-side.jpg';
import dark  from '@static/dark-side.jpg';



const ChooseSideItem = ({
  theme,
  text,
  img,
  classes
}) =>{
  const isTheme = useTheme();
  return(
    
      <div 
       onClick={() => isTheme.change(theme)}
       className={cn(styles.item, classes)}
       >
        <img className={styles.item__img} src={img} alt={text} />
        <span className={styles.item__header}>{text}</span>
      </div>
    
  )
} 


const ChooseSide = () => {
    

  return (
    
    <div className={styles.container}> 
      <ChooseSideItem
           theme={THEME_LIGHT}
           text='Light side'
           img={light}
           classes={styles.item__light} 
        />
         <ChooseSideItem
           theme={THEME_DARK}
           text='Dark side'
           img={dark}
           classes={styles.item__dark} 
        />
         <ChooseSideItem
           theme={THEME_NEUTRAL}
           text='I`m Han Solo '
           img={neutral}
           classes={styles.item__neutral} 
        />
      </div>
       
        
    
  );
}
ChooseSideItem.propTypes = {
  theme: PropTypes.string,
  img: PropTypes.string,
  text: PropTypes.string,
  classes: PropTypes.string
}
export default ChooseSide;
