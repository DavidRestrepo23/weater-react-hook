import React from 'react';

const WeatherInfo = ({weatherInfo}) => {

    const {name, main} = weatherInfo;

    const kelvin = 273.15;
    
    return ( 
        <div className="card-panel white col s12">
            <div className="black-text">
               <h3>El clima actual de <b>{name}</b> es: </h3>
               <p className="temperatura">
               {parseInt(main.temp - kelvin, 10)} °c
               </p>
               <p>Temperatura Maxíma: {parseInt(main.temp_max - kelvin, 10)} °c </p>
               <p>Temperatura Minima: {parseInt(main.temp_min - kelvin, 10)} °c </p>
            </div>
        </div>
     );
}
 
export default WeatherInfo;