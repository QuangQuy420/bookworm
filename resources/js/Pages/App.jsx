import React from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { createHashRouter } from "react-router-dom";
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Shop from './Shop';
import NotFound from './NotFound';
import Product from './Product';

const router = createHashRouter([
    {
        path: '/home',
        element: (
            <DefaultLayout>
               <Home/>
            </DefaultLayout>
        )
    },
    {
        path: '/shop',
        element: (
            <DefaultLayout>
               <Shop/>
            </DefaultLayout>
        )
    },
    {
        path: '/shop/product/:id',
        element: (
            <DefaultLayout>
               <Product/>
            </DefaultLayout>
        )
    },
    {
        path: '/about',
        element: (
            <DefaultLayout>
               <About/>
            </DefaultLayout>
        )
    },
    {
        path: '/cart',
        element: (
            <DefaultLayout>
               <Cart/>
            </DefaultLayout>
        )
    },
    {
        path: '*',
        element: (
            <NotFound/>
        )
    }
]);


export default router;