import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Countries = () => {
    // hooks
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get(
            "https://restcountries.com/v3.1/all?fields=name,capital,region,population"
        ).then((res) => setData(res.data));

        console.log(data)
    },[])
    
    return (
        <div className="countries">
            {data.map((country) => (
                <li>{country.name.common}</li>
            ))}
        </div>
    );
};

export default Countries;