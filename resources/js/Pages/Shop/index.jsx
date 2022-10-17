import React from 'react';
import ContentShop from '../../components/ShopComponents/ContentShop';
import TitleShop from '../../components/ShopComponents/TitleShop';
import './style.scss'

function Shop(props) {
    return (
        <div className='shop'>
            <TitleShop />
            <ContentShop />
        </div>
    );
}

export default Shop;