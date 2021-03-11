/*
All products are listed here
*/

import React from 'react'
import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react';
import Products_list_card from '../../components/Products/Products_list_card'
import _ from 'lodash'

class ProductIndex extends React.Component {
   constructor(props) {
      super(props)

      this.state = {
         products: {}
      }
   }

   componentDidMount = async () => {
      const response = await axios.get(`/api/products`)

      this.setState({ products: response.data.payload })
   }

   render = () => {
      return (
         <div>
            <Products_list_card products={this.state.products} />
         </div>
      )
   }
}


/*const ProductIndex = () => {
   const [products, setProducts] = React.useState({});

   products ?? <h2>Loading...</h2>

   useEffect(() => {
      async function fetchAppointments() {
         const response = await axios.get(`/api/products`)

         setProducts(response.data.payload)
      }

      fetchAppointments()
   }, [])

   console.log(products);

   return (
      <div>
         <Products_list_card products={products} />
      </div>
   )


}*/
export default ProductIndex
