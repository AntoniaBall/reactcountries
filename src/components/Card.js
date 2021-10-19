import React from 'react';

const Card = (props) => {
    const { country } = props; // desctructuration
    console.log(country);
    
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      };

    return (
        <div>
            <div className="data-container">
                <ul>
                    <li className="card">{country.flag}</li>
                    <li className="card">{country.name.common}</li>
                    <li className="card" label="population">{numberFormat(country.population)}</li>
                    <li className="card">{country.capital}</li>
                </ul>
            </div>
        </div>
    );
};

export default Card;