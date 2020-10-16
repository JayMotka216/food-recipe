import React from 'react';

function Recipe(props) {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>Calories {props.calories}</p>
            <img src={props.image} alt={props.title}/>
        </div>
    );
}

export default Recipe;