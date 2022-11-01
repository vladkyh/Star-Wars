import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import  {composeWithDevTools}  from 'redux-devtools-extension';
import { setLocalStrogale } from '@utils/localStrogale';
import rootReducer from './reducer'
import favoriteReducer from './reducer/favoriteReducer';
 
const store = configureStore({
    reducer:{
        favorite: favoriteReducer,
    },
    composeWithDevTools
    
})
store.subscribe(()=>{
   
    setLocalStrogale('store', store.getState().favorite )

    
})
export default store;