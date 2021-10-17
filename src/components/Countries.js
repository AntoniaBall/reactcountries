import axios from 'axios';
import React, { useState } from 'react';

const Countries = () => {
    // hooks
    const [data,setData] = useState([]);
    
    axios.get('https://restcountries.com/v3.1/all?fields=name,capital,region,population').then((res) => console.log(res.data));


    return (
        <div>
            <h3>Countries</h3>
            <p>{data}</p>
        </div>
    );
};

export default Countries;