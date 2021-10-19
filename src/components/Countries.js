import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    // hooks
    const [data,setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [playOnce,setPlayOnce] = useState(true);

    useEffect(() => {
        if (playOnce){
            axios.get(
                "https://restcountries.com/v3.1/all?fields=name,capital,region,population,flag"
            ).then(
                (res) => {
                    setData(res.data);
                    setPlayOnce(false);
                }
            );
        }
        const sortedCountry = () => {
            const countryObj = Object.keys(data).map((i) => data[i]); // transformer array en objet
            const sortedArray = countryObj.sort((a,b) =>{
                return b.population - a.population // tri croissant
            });
            setSortedData(sortedArray);
        }
        console.log(sortedCountry);
        sortedCountry();
    },[data,playOnce]);

    return (
        <div className="countries">
            <div className="countries-list">
            {sortedData.map((country) => (
                <Card country={country} key={country.name.common}/>
            ))}
            </div>
        </div>
    );
};

export default Countries;