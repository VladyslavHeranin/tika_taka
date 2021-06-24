import React from "react"



export const Square = (props) => {

    return (

        <div className="square" onClick={props.onClick} >
            {props.value}
        </div>)

}
