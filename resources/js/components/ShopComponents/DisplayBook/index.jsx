import React, { useEffect, useState } from 'react';
import * as bookServices from '../../../apiServices/bookServices';
import CardBook from '../../CardBook';


import './style.scss'

function DisplayBook(props) {

    const [ listBooks, setListBook ] = useState([])
    const list = [0,1,2,3,4,5]

    useEffect(() => {
        const getSaleBooks = async () => {
            const result = await bookServices.getListBooks('/get-all-books');
            setListBook(result.data);
        }
        getSaleBooks()
    }, []);

    const slides = listBooks.map((data, index) => {
        return (
            <div className='col-3' key={index}>
                <CardBook detailBook = {data} />
            </div>
        )
    })
    return (
        <>
            {slides}
        </>
    );
}

export default DisplayBook;