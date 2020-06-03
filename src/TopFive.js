import React,{useState} from 'react';


function TopFive(props){

    return(
        <div>
            <h2>Top 5 Fucked Names/Things</h2>
            <ol>
                {props.topFive.map((t) =>{
                    return (<li> {t}</li>)
                })}
            </ol>
        </div>    
    )
}

export default TopFive