import React from 'react';
import DefaultLayout from '../components/DefaultLayout';

import { createHashRouter } from "react-router-dom";

import SignIn from './SignIn';
import Home from './Home';
import About from './About';
import Cart from './Cart';
import Shop from './Shop';
import NotFound from './NotFound';

const router = createHashRouter([
    {
        path: '/',
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
        path: '/sign-in',
        element: (
            <DefaultLayout>
               <SignIn/>
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