import {React, useEffect, useState } from 'react';
import back from '@static/back.svg';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getApiResourse } from '@utils/network';
import styles from './PersonPage.module.css';
import { API_PERSON } from '@const/api';
import { withErrorApi } from '@hoc-components/withErrorApi';
import { getPeopleImage, getPeoplePageId } from '../../services/getPeopleData';
import PersonImg from '@components/PersonImg/PersonImg';
import PersonState from '@components/PersonState/PersonState';
import { lazy } from 'react';
import { Suspense } from 'react';
import UiLoading from '../../components/ui-kit/UiLoading/UiLoading';
import {useSelector} from 'react-redux';
import FavoritePage from '../FavoritePage/FavoritePage';

const PersonPage = ({match, setErrorApi}) => { 
    const [peopleId, setPeopleId] = useState(null)
    const [peopleInfo, setPeopleInfo] = useState(null);
    const [PersonName, setPersonName] = useState(null);
    const [personImg, setPersonImg] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const [personFavorite, setPersonFavorite] = useState(false)
    const {id} = useParams();

    // store / redux
    const storeData = useSelector(state => state.favorite);


    // lazy load
     const PersonFilms = lazy(() => import('@components/PersonFilms/PersonFilms'));


    // кнопка назад
    const navigate = useNavigate();
    const GoBack = () => navigate(-1);


    useEffect(() => {

      (async() => {
        const res = await getApiResourse(`${API_PERSON}/${id}/`);
        setPersonImg(getPeopleImage(id));
        setPeopleId(id); 
        storeData[id] ? setPersonFavorite(true) :setPersonFavorite(false);
        setPeopleInfo([
              {title: 'Height',   info: res.height},
              {title: 'Mass',  info: res.mass},
              {title: 'Hait color',  info: res.hair_color},
              {title: 'Skin color',  info: res.skin_color},
              {title: 'Eye color',  info: res.eye_color},
              {title: 'Gender',  info: res.gender}
        ]);
        res.films.length && setPersonFilms(res.films);
        setPersonName(res.name);
        setErrorApi(!res);
          
        
      })(id);

    //   самовызывающаяся функция
    }, []);



    
    
  return (
    
    <>  
    {/* кнопка назад */}
      <a onClick={GoBack} className={styles.back}>
        <img className={styles.back__img}  src={back} alt="" />
        <span className={styles.back__button} >Go back</span>
      </a>


    <div className={styles.wrapper}>
            
            <span  className={styles.person__name}>{PersonName}</span >
                        {/* вот эта хуйня с && это оказывается ебучий тернарный оператор, типа если peopleindfo: true, то передаем пропсы */}
           <div className={styles.container}>

              <PersonImg 
                PersonName={PersonName}
                personImg={personImg}
                peopleId={peopleId}
                personFavorite={personFavorite}
                setPersonFavorite={setPersonFavorite} />

              {peopleInfo && <PersonState PersonName={PersonName} peopleInfo={peopleInfo}/>}

              {personFilms && (
                <Suspense fallback={<UiLoading/>}>
                    <PersonFilms personFilms={personFilms}/>
                </Suspense>

                
              )}
              
           </div>
      </div>
        
      
    </>
  );
}
// PersonPage.propTypes = {
//   text: PropTypes.func
// }
export default PersonPage;
