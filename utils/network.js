import React from 'react'
import { HTTP, HTTPS } from '../const/api';


// изменяет url на https
export const changeHTTP = url => {
    const result = url ? url.replace(HTTP, HTTPS): url;
    return  result;
}


// принимаем данные с сервера свапи
export const getApiResourse = async (url) => {

        
        // то же самое что и catch
         // тут тестируем, если запрос без ошибок, то все с кайфом, если ошибка, то хуярим catch
        try {
        //    ответ на запрос
            const res = await fetch(url);
            // обрабатываем ошибку 404
            if(!res.ok){
                console.error('файл не найден', res.status)
                return false;
            }
            
            return await  res.json();
            
        }catch (error) {
            console.error('Запрос не сработал.', error.message)
            return false;
        }
    }
        
        // тоже самое (промис), но без асинхрона
        // fetch(url)
        //     .then(res => res.json(url))
        //     // с помощью фетч приняли запрос, зенами их вывели в консоль
        //     .then(body => console.log(body))
        //     // 
        //     .catch(error => console.log(error))
        



// (async() => {
//     const body = await getApiResourse(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();

