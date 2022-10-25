import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { getApiResourse } from '@utils/network';
import styles from './PersonPage.module.css';
import { useEffect, useState } from 'react';
import { API_PERSON } from '@const/api';
import { withErrorApi } from '@hoc-components/withErrorApi';
import PersonState from '../../components/PersonState/PersonState';
import { getPeopleImage, getPeoplePageId } from '../../services/getPeopleData';
import PersonImg from '@components/PersonImg/PersonImg';
const PersonPage = ({match, setErrorApi}) => { 
    const {id} = useParams();
    const [peopleInfo, setPeopleInfo] = useState(null);
    const [PersonName, setPersonName] = useState(null);
    const [personImg, setPersonImg] = useState(null);

    useEffect(() => {

      (async() => {
        const res = await getApiResourse(`${API_PERSON}/${id}/`);
        setPersonImg(getPeopleImage(id));
        console.log(res);
        
        
        
        if (res) {
            setPeopleInfo([
                  {title: 'Height',   info: res.height},
                  {title: 'Mass',  info: res.mass},
                  {title: 'Hait color',  info: res.hair_color},
                  {title: 'Gender',  info: res.gender},
                  {title:"Birth year", info:res.birth_year} 
                  
                
            ]);
            setPersonName(res.name)
            setErrorApi(false);
          } else{
            setErrorApi(true)
          }
        
      })(id);

    //   самовызывающаяся функция
    }, []);



    
    
  return (
    <>  <div className={styles.wrapper}>
            <span  className={styles.person__name}>{PersonName}</span >
                        {/* вот эта хуйня с && это оказывается ебучий тернарный оператор, типа если peopleindfo: true, то передаем пропсы */}
           <div className={styles.container}>
              <PersonImg PersonName={PersonName}  personImg={personImg}/>
              {peopleInfo && <PersonState PersonName={PersonName} peopleInfo={peopleInfo}/>},
              
           </div>
      </div>
        
        
    </>
  );
}
// PersonPage.propTypes = {
//   text: PropTypes.func
// }
export default PersonPage;
