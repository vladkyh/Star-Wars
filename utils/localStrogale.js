export const getLocalStrogale = key =>{
    const data = localStorage.getItem(key);
    if(data !== null){
        return JSON.parse(data)
    }
    return{};
    
}
export const setLocalStrogale = (key,data) =>{
    localStorage.setItem(key, JSON.stringify(data));
}