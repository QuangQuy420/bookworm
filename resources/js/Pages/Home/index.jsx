import React, { useEffect, useState } from "react";
import FeaturedBook from "../../components/HomeComponents/FeaturedBook";
import OnSale from "../../components/HomeComponents/OnSale";
import * as bookServices from '../../apiServices/bookServices';
import "./style.scss";

function Home(props) {
    const [ saleBooks, setSaleBooks ] = useState([]);
    const [ featuredBooks, setFeaturedBooks ] = useState([]);
    const [ apiUrl, setApiUrl ] = useState('/books/recommend')

    const handleFilterBook = (apiUrl) => {
        setApiUrl(apiUrl);
    }

    useEffect(() => {
        const getSaleBooks = async () => {
            const endpoint = '/books/on-sale';
            const result = await bookServices.getListBooks(endpoint);
            setSaleBooks(result.ListBook.data);
        }
        getSaleBooks()
    }, []);

    useEffect(() => {
        const getFeaturedBooks = async () => {
            const result = await bookServices.getListBooks(apiUrl);
            setFeaturedBooks(result.ListBook.data)
        }
        getFeaturedBooks()
    }, [apiUrl]);

    return (
        <>
            <OnSale saleBooks={saleBooks} />
            <FeaturedBook 
                featuredBooks={featuredBooks} 
                onFilterBook={handleFilterBook}
            />
        </>
    );
}

export default Home;
