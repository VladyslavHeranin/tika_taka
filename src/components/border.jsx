import React, { useState } from "react"
import { Square } from "./Square"



export const Border = ({ squares, click }) => {

    return (<div className="border">
        {
            squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => click(i)} />
            ))
        }
    </div>)

}


