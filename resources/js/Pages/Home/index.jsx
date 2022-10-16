import React, { useEffect } from "react";

import request from "../../utils/request";
import FeaturedBook from "../../components/HomeComponents/FeaturedBook";
import OnSale from "../../components/HomeComponents/OnSale";

import * as bookServices from '../../apiServices/bookServices'
import "./style.scss";

function Home(props) {

    useEffect(() => {
        const getSaleBooks = async () => {
            const result = await bookServices.getSaleBooks('/get-sale-books');
            console.log(result);
        }

        getSaleBooks()
    }, []);

    return (
        <>
            <OnSale />
            <FeaturedBook />
        </>
    );
}

export default Home;
