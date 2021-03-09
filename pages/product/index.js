/*
All products are listed here
*/

import React from 'react'
import Head from 'next/head'
import { useEffect, useState} from 'react';



import Products_list_card from '../../components/Products_list_card'


/*
A showroom-img column should be created in the product table in the database.
*/
const data = JSON.parse("{\"id\":\"0\", \"product_name\":\"NIKE\", \"category_id\":\"kategori:sport\", \"product_desc\":\"I AM NIKE.\", \"showroomImg\": \"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/72a58094-d560-41f7-80a3-7f16385325d0/air-vapormax-2020-fk-ayakkabısı-BhRhR9.jpg\"}");


const ProductIndex =() => {
console.log("data:",data)

return(


/*
Products must be pulled from the product-table database and sent to the Products_list_card.
*/
<Products_list_card product={data} key={data.id}/>



   )


}


export default ProductIndex
