import React from "react";

const Button=(props)=>{
    return(
        <button className="btn button-37" onClick={props.onClick}>
            {props.value}
        </button>
    )

}


export default Button;
