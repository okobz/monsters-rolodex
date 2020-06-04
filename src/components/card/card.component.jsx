import React  from 'react';
import './card.styles.css';


export const Card = props =>  (
    <div className='card-container'> 
        <img 
            alt='monster' 
            src= {`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
            //DON'T FORGET TO USE `` RATHER THAN '' IN THE IMG SRC URL TO ENSURE THAT IT FORMS AND FUNCTIONS PROPERLY
        />

        <h2> {props.monster.name} </h2>

        <p> {props.monster.email} </p>
    </div>

);