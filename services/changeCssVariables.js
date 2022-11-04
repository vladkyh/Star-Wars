import { element } from "prop-types";

export const  changeCssVariables = theme => {
    const root = document.querySelector(':root');
        
        const cssVariables = ['header', 'bg', 'text-shadow'];
        
        
       

        cssVariables.forEach(element =>{
            root.style.setProperty(
                `--theme-default-${element}`,
                `var(--theme-${theme}-${element})`
                ); 
        })
}
