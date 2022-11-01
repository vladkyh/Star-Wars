import cn from 'classnames'
import PropTypes from 'prop-types';
import { withErrorApi } from '@hoc-components/withErrorApi';
import PeopleList from '@components/PeoplePage/PeopleList';
import { useState, useEffect } from 'react';
import { getApiResourse, changeHTTP } from "@utils/network";
import { API_PEOPLE } from '@const/api';
import { getPeopleId, getPeopleImage, getPeoplePageId } from '@services/getPeopleData';
import { useQueryParams } from '@hooks/useQueryParams';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';



const PeoplePage = ({setErrorApi}) => {
  const [people, setPeople] = useState(null);
  const [PrevPage, setPrevPage] = useState(null);
  const [NextPage, setNextPage] = useState(null);
  const [CounterPage, setCounterPage] = useState(null);
 
  

// тут начинаем переходить по страницам
  const query = useQueryParams();
  const queryPage = query.get('page');
 
  


  const getResourse = async(url) => {
    // асинхронно принимаем данные
    const res = await getApiResourse(url);
    // с помощью map перебираем массив и выводим имя с url
      const peopleList = res.results.map(({name, url}) =>{
        const id =  getPeopleId(url);
        const img = getPeopleImage(id);
        return{
          // если ключ и значение совпадают, то можно писать просто названия
          id,
          name,
          img
        }
      })

      setPeople(peopleList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getPeoplePageId(url));
      setErrorApi(!res);
   
  }

  useEffect(() => {
     getResourse( API_PEOPLE+ queryPage);
  }, [queryPage]);
  
  return (
    <> 
      <h1 className='header__text'>Navigation</h1>
      <PeopleNavigation
          getResourse = {getResourse}
          PrevPage = {PrevPage}
          NextPage ={NextPage}
          CounterPage ={CounterPage}
      />
      {people && <PeopleList people = {people}/>}
    </>
  );
}
PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}
export default withErrorApi(PeoplePage);




    
