import loader from '@static/loading.svg'
import { useState, useEffect } from 'react';
import styles from './UiLoading.module.css';
const UiLoading = ({theme='white'}) => {
  return (
    
    <>
    <div className="example-overlay">
        <img className={styles.loader}  src={loader} alt='loading'/>
    </div>
    </>
  );
}

export default UiLoading;
