import React from "react";
import axios from "axios";
import { useRouter } from 'next/router'
import _ from "lodash";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Product_info from "../../components/Products/Product_info";

import Product_comment from "../../components/Products/Product_comment";

const classesr = makeStyles({
  root: {
    marginTop: "7rem",
  },

  comments: {
    marginTop: "50px",
  },
});

/*
A showroom-img column should be created in the product table in the database.
*/
const data_product = JSON.parse(
  '{"id":"0", "product_name":"nyan", "category_id":"10", "product_desc":"I am i cat", "showroomImg": "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F02%2Fchris-torres-nyan-cat-foundation-10-year-anniversay-auction-001.jpg?quality=95&w=1170&cbr=1&q=90&fit=max"}'
);

const data_comments = JSON.parse(
  '{"id":"0","p_id":"0","name": "AVRİL LAVIGNE", "comment":"ROCK N ROLL " }'
);

//const data_product_images = JSON.parse("");

const ProductId = () => {
  const classes = classesr();
  const router = useRouter()

  const get_product_id =  router.query.id;
  const [product, setProduct] = useState({});

      product ?? <h2>Loading...</h2>;


        useEffect(() => {
          async function fetchAppointments() {
            const response = await axios.get(`/api/products/`);

            setProduct(response.data.payload);
          }

          fetchAppointments();
        }, []);

  return (


<div>
        {_.map(product, (p) => {  return(p.id+"-")})}

        {_.map(product, (p) => {  return( get_product_id == p.id ? (

          <div className={classes.root}>
            <Product_info
              className={classes.root}
              data_product={p}
              key=''
            />
              <Product_comment className={classes.comments} comments={get_product_id} />

            </div>



        ) :('')  )})}


    </div>



  );
};

export default ProductId;