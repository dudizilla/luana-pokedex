import React from "react";
import './typetag.css';

export const TypeTag=({typeName}:{typeName:string})=>{
    return (
        <div className={`tag ${typeName}`}>
            <p className='typeName'>
                {typeName}
            </p>
        </div>
    )
}

