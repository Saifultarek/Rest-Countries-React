import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name , flag, capital, population,region} = props.country;
   // console.log(props.country);
    return (
        <div className="country">
            <h1>This is :{name}</h1>
            <img src= {flag} alt =""/>
            <br></br>
            <small>Region:{region}</small>
            <p>capital: {capital} population:{population}</p>
        </div>
    );
};

export default Country;