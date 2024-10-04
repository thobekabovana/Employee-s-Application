import React from "react";
import { useState, useEffect } from "react";


const Remove =({id}) => {

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
      localStorage.setItem('employees', JSON.stringify(filteredData));
      alert("Deleted Successfully")
      window.location.reload();
    }};


return(
<>
<button  className="delete btn" onClick={handleClick}>Delete</button>
</>
)
}

export default Remove