import React from 'react';
import DetailBook from '../../components/ProductComponents/DetailBook';
import Order from '../../components/ProductComponents/Order';
import ListReview from '../../components/ProductComponents/ListReview';
import FormReview from '../../components/ProductComponents/FormReview';

import './style.scss'

function Product(props) {
    return (
        <>
            <h5 className='product__title'>Category Name</h5>
            <div className="product__book row">
                <DetailBook />
                <Order />
            </div>
            <div className="product__review row">
                <ListReview />
                <FormReview />
            </div>
        </>
    );
}

export default Product;