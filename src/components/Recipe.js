import React from 'react';
import style from './recipe.module.css';

function Recipe(props) {
    var c = 0;
    return(
        <div className={style.recipe}>
            <p className={style.title}>{props.title}</p>
            <p><strong>Calories :</strong> {props.calories}</p>
            <p><strong>Ingredients</strong></p>
            <div className={style.ing}>
                <ol>
                    {
                    props.ingredients.map(ingredient => (
                        <li key={c += 1}>{ingredient.text}</li>
                    ))}
                </ol>
            </div>
            <img className={style.image} src={props.image} alt={props.title}/>
        </div>
    );
}

export default Recipe;