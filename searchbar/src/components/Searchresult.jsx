import React from "react";
import "./Searchresult.css";

export const Searchresult=({results})=>{
    return(
        <div className="result-List">
            {
                results.map((result,id)=>{
                    return<div key={id}>{result.name}</div> 
                })
            }
        </div>
    );
    
};