import React, {useState, useEffect} from 'react';
import CardProduct from './CardProduct';
import Axios from 'axios';

const HomeProductList = ({onglets}) => {
    const [newProducts, setNewProducts] = useState([]);
    const [MonthProducts, setMonthProducts] = useState([]);

    useEffect(() => {
        //news
        Axios.get('URL/api/')
            .then(res => res.data)
            .then(data => getNewProducts(data))
            .then(results => setNewProducts(results))
        //month
        Axios.get('URL/api/')
            .then(res => res.data)
            .then(data => getMonthProducts(data))
            .then(results => setMonthProducts(results))
    }, []);

    let month = new Date();
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let goodMonth = months[month.getMonth()];

    // have the news products
    const getNewProducts = (data) => {
        return data.filter(product => product.creationDate.includes(goodMonth)).slice(0, 9);
    };

    // have the products of the month
    const getMonthProducts = (data) => {
        return data.filter(product => product.name.includes(product.createDate.includes(goodMonth)).slice(0,9));
    };

    

    return(
        <div className="container-products">
            {onglets === 1 ? (
                <>
                <CardProduct products={newProducts} />
                <CardProduct products={newProducts} />
                <CardProduct products={newProducts} />
                </>
            ) : (
                <CardProduct products={MonthProducts}/>
            )}
        </div>
    )
};

export default HomeProductList;