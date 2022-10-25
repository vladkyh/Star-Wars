import {
    SWAPI_PARAM_PAGE,
      SWAPI_PEOPLE,
    HTTP, HTTPS, SWAPI_ROOT, 
    URL_IMG_PERSON, GUIDE_IMG_EXTESION
} from '@const/api';

// сортируем по страницам
export const getPeoplePageId = url => {
    const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(pos+ SWAPI_PARAM_PAGE.length, url.length);

    return Number(id);
    
}

//-----------------------------------------------
// Проверка протокола: HTTP или HTTPS
//-----------------------------------------------
const checkProtocol = url => {
    if (url.indexOf(HTTPS) !== -1) {
        return HTTPS;
    }

    return HTTP;
}

// id 
const getId=(url,category) =>{
    const protocol = checkProtocol(url);

    const id = url
        .replace(protocol+SWAPI_ROOT+category, '')
        // регулярное выражение, глобальный поиск
        .replace(/\//g,'');
    return id;
}

// собираем айдишник
export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);
// собираем изображение
 export const getPeopleImage = (id) => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTESION}`;