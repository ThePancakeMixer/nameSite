import React,{useState} from 'react';


function Info(props){

    return(
        <div>
            <div>{props.infoString.one}</div>
            <div>{props.infoString.two}</div>
            <div>{props.infoString.three}</div>
            <div>{props.infoString.four}</div>
            <div>{props.infoString.five}</div>
            <div>{props.infoString.six}</div>
        </div>
    )
}



export default Info;
