import React from 'react';
import FeaturedBook from '../../components/HomeComponents/FeaturedBook';
import OnSale from '../../components/HomeComponents/OnSale';
import './style.scss'

function Home(props) {
    return (
        <>
            <OnSale />
            <FeaturedBook />
        </>
    );
}

export default Home;