import React from "react";
import { useState, useEffect } from "react";


const remove =({id}) => {

    const [filtedList, setFiltedList] = useState([]);
    useEffect(() => {
      const storedData = JSON.parse(localStorage.getItem("inputs"));
      setFiltedList(storedData || []);
    }, []);
  
    const handleClick = () => {
        if (Array.isArray(filtedList)) {
        const filteredData = filtedList.filter(item => item.id !== id);
      setFiltedList(filteredData);
      console.log(filteredData)
      localStorage.setItem('inputs', JSON.stringify(filteredData));
      alert("Deleted Successfully")
    }};


return(
<>
<button  className="delete btn" onClick={handleClick}>Delete</button>
</>
)
}

export default remove