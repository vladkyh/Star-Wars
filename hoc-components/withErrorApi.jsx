import { useState } from "react";
import ErrorMessage from "@components/ErrorMessage/ErrorMessage";

export const withErrorApi = View =>{
    
    // обрабатываем ошибку
    return props => {
        const [ErrorApi, setErrorApi] = useState(false);
         return (
           <>
               {ErrorApi
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