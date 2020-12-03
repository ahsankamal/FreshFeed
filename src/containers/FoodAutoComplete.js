import React, { useEffect, useState, useRef, Component } from 'react';

const FoodAutoComplete = (props) => {
    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
  
    // click outside to close the autocomplete
    const autoRef = useRef(null);
  
    useEffect(()=>{
      const foodNames = ['abc', 'grains', 'bread', 'xyz', 'pq', 'red', 'zse', 'asse', 'chicken', 'barley', 'acvg', 'ar', 'agh'];
      setOptions(foodNames);
    }, []);
  
  const setFoodName = (name) => {
    setSearch(name);
    setDisplay(false);
  }
  
    useEffect(()=>{
      // adding and removing autocomplete on mousedown click
      document.addEventListener("mousedown", handleMouseDownClick);
      return () => {
        document.removeEventListener("mousedown", handleMouseDownClick);
      };
    },[]);
  
    const handleMouseDownClick = ((event)=>{
      const {current: curDiv} = autoRef;
      console.log(curDiv);
      if (curDiv && !curDiv.contains(event.target)){
        setDisplay(false);
      }
    });

    const handleFoodNameChange = ((event)=>{
      console.log("new value", event.target.value);
      setSearch(event.target.value);
      // props.onFoodNameChange();
    });
  
    return (
      <div ref={autoRef} className="col-sm-10">
          <input id = "auto"
                className="form-control"
                onClick={()=>setDisplay(!display)}
                name="foodName"
                type="text"
                placeholder="type to search"
                value={search}
                onChange={handleFoodNameChange}/>
          {
            display && 
            (<div>
                {
                  options
                  .filter((name)=> name.indexOf(search.toLowerCase()) > -1) //to handle empty string
                  .map((val, ind)=>{
                  return <div onClick={()=>setFoodName(val)} className='option' key={ind} tabIndex="0">{val}</div>
                  })
                }
            </div>
            )
          }
      </div>
    );
  };

  export default FoodAutoComplete;