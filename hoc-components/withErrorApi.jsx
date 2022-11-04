import { useState } from "react";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

export const withErrorApi = View =>{
    // обрабатываем ошибку
    return props => {
        const [errorApi, setErrorApi] = useState(false);
         return (
           <>
               {errorApi
                ? <ErrorMessage/>
                :(
                  <View
                    setErrorApi={setErrorApi}
                    {...props}
                  />
                )
              } 
          </>
        );    
    }
}