import cn from 'classnames'
import styles from './App.module.css';
import {Router, Routes, Route } from 'react-router-dom'
import routesConfig from '@router/routesConfig';
import Header from '../../components/Header/Header';
const App = () => {
  return(
    <>
     <div className={styles.wrapper}>
        <Header></Header>
        <Routes>
          <Route>
            {/* с помощью map перебираем данные в роут конфиге и подставляем к нашим страницам */}
            {routesConfig.map((route, index) =>(
              <Route
                key={index}
                path={route.path}
                element={route.element}
  
              
              />
            ))}
          </Route>
  
          </Routes>  
     </div>
    </>
  )
}

export default App;
{/* <BrowserRouter>
        <Route>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/people">PeoplePage</NavLink>
          <Route exact path='/' element={<HomePage/>}/>
          <Route path='/people' element={<PeoplePage/>}/>
        </Route>

        </BrowserRouter>   */}