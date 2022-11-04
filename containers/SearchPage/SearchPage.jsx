import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { getApiResourse } from '@utils/network';
import styles from './SearchPage.module.css';
import { API_SEARCH } from '@const/api';
import { withErrorApi } from '@hoc-components/withErrorApi';
import { getPeopleImage, getPeopleId } from '@services/getPeopleData';
import SearchPageInfo from '@components/SearchPageInfo/SearchPageInfo';
import { useEffect } from 'react';
import { debounce } from "lodash";
import clear from '@static/x.svg'
import cn from 'classnames'

const SearchPage = ({setErrorApi}) => {

  const [inputSearchValue, setInputSearchValue] = useState('')
  const [people, setPeople] = useState([])
 
// создаем запрос

    const getResponse = async (param) =>{
        const res = await getApiResourse(API_SEARCH+param);
         
// тут проверка обязательна, иначе поиск сломается 
        if (res) {
          const peopleList = res.results.map(({ name, url}) => {
              const id = getPeopleId(url);
              const img = getPeopleImage(id);
  
              return {
                  id,
                  name,
                  img,
              }
          });
  
          setPeople(peopleList);
      }

      setErrorApi(!res);
  };
// делаем с помощью хука чтобы при пустом инпуте ничего не появлялось
  useEffect(() => {
      getResponse('');
  }, []);
// делаем задержку на вывод 
  const debounceGetResponse = useCallback(
    debounce( value => getResponse(value), 300),
    []
  )
  
//   выводим в консоль значение
  const  handleInputChange = (event) =>{
    const value = event.target.value;
    setInputSearchValue(value);
    debounceGetResponse(value);
    
    }
  return (
    <>
        <h1 className='header__text'>Results</h1>
        <div className={styles.wrapper__input}>
          <input
           type="text"
           value={inputSearchValue}
           onChange={handleInputChange}
           placeholder="Input charcters`s name"
           className={styles.input}
            />
            <img 
            onClick={() => inputSearchValue && setInputSearchValue('')}
            src={clear} 
            alt="" 
            className={cn(styles.clear, !inputSearchValue && styles.clear__disabled)}
             />
        </div>
       
        <SearchPageInfo people={people}>
        </SearchPageInfo>
    </>
  );
}
SearchPage.propTypes = {
  setErrorApi: PropTypes.func
}
export default withErrorApi(SearchPage) ;
