/*
All products are listed here
*/

import React from 'react'
import Head from 'next/head'
import {useEffect, useState} from 'react';


import Product_info from '../../components/Product_info'


/*
A showroom-img column should be created in the product table in the database.
*/
const data_product = JSON.parse("{\"id\":\"0\", \"product_name\":\"nyan\", \"category_id\":\"10\", \"product_desc\":\"I am i cat\", \"showroomImg\": \"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F02%2Fchris-torres-nyan-cat-foundation-10-year-anniversay-auction-001.jpg?quality=95&w=1170&cbr=1&q=90&fit=max\"}");


//const data_product_images = JSON.parse("");


const ProductId = () => {


    return (


        /*
        Products must be pulled from the product-table database and sent to the Products_list_card.
        */
        <div>
            <Product_info product={data_product} key={data_product.id}/>

        </div>

    )


}


export default ProductId
