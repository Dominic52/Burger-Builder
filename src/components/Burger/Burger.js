import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients) // get ingredients keys => [cheese, meat, salad]
    .map(igKey => {
        return [...Array(props.ingredients[igKey])] // create array with length of number of each ingredient 
        .map((_, i) => { 
            return <BurgerIngredient key={igKey + i} type={igKey} /> // for each item in the array (number of each ingredient) generate BurgerIngredient JSX where each ingredient has a unique key
        })
    })
    .reduce((arr, el)=>{ // flatten transformedIngredients array
        return arr.concat(el);
    }, []);

    // if flattened array has no jsx elements, create p tag prompt
    if (transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;