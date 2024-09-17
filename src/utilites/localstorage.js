import { json } from "react-router-dom";

const getItems = () => {
    let value = localStorage.getItem("estate");
    if(value){
        return JSON.parse(value);
    }
    return [];
}

const setItems = (id) =>{
    const oldArray = getItems();
    const isIn = oldArray.find(ids => ids == id);
    if(!isIn){
        oldArray.push(id);
        localStorage.setItem("estate",JSON.stringify(oldArray));
        return true;
    }
    else{
        return false
    }
}

const removeItems = (id) =>{
    const array = getItems()
    const filteredArray = array.filter(ids => ids != id);
    localStorage.setItem("estate",JSON.stringify(filteredArray));

}

export {setItems,getItems,removeItems}