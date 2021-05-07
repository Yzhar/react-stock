import React from 'react';
const Stock=(props)=>{
    return  <div>
       
        <p onClick={props.click} style={{
            border: "2px solid white ",paddingLeft:"100px",paddingRight:"100px"
        }}>  {props.name}'s stock: </p>
        <div> 
            <input type="text" onChange={props.changed} value={props.price}  />
            <p>current value: {props.price}</p>
         <p>{props.children}</p>
        </div>
    </div>
};
 export default  Stock;