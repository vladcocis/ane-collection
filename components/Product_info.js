import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState} from 'react';

import {
  Card,
	CardContent,
  CardHeader,
  CardActions,
	Grid,
	Button,
	Typography,
  Container,
  Paper,
} from '@material-ui/core'

import MobileStepper from '@material-ui/core/MobileStepper';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


import {
  CardMedia,
} from "@material-ui/core";

const productStyle = makeStyles({
 root: {
   marginTop: "7rem",
   marginBottom: "4rem",

 },
 inStock: {
   marginBottom: "4rem",
   color:"blue",
 },
 productDescription: {
   marginBottom: "2rem",
 },
 productImage: {
   width: "100%",
   height: "100%",
   backgroundSize: "100% 200",
   minHeight: "30vh",
 },
 price: {
   marginBottom: "1rem",
    fontSize:'20px',

 },
 arrowBtn: {
   maxWidth: "fit-content",
   marginTop: "0.3rem",
 },



imgcontainer:{
  maxWidth:'50%',

},

productHeader:{

 fontSize:'40px',

},

strepper:{
 marginTop: "2rem",

},



});


const tutorialSteps = [
  {

    imgPath:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/a46742ce-8dcf-4540-ba45-7ed7b35a9a99/air-zoom-pegasus-37-premium-koşu-ayakkabısı-lRcGVd.jpg',
  },
  {

    imgPath:
      'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/fe89bbe0-c5d9-4de7-99a4-fd3845693673/air-zoom-pegasus-37-premium-koşu-ayakkabısı-lRcGVd.jpg',
  },
  {

    imgPath:
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/9ef5bc51-9e9f-40a7-86a4-13d746b8a11b/air-force-1-react-ayakkabısı-VF4bwV.jpg',
  },
  {

    imgPath:
      'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/w_432,c_limit/ce13ce3b-704c-4bc7-bad2-9fc214a8079a/air-max-plus-3-ayakkabısı-br9zBx.jpg',
  },
  {

    imgPath:
      'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d02b66b7-ee6a-429a-a0e0-63c7da600c49/air-jordan-35-basketbol-ayakkabısı-bGv0b6.jpg',
  },
];




const Product_info = ({ data_product, product_images}) => {

const pclasses = productStyle();


const [activeStep, setActiveStep] = React.useState(0);
const maxSteps = tutorialSteps.length;

const handleNext = () => {
  setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

const handleBack = () => {
  setActiveStep((prevActiveStep) => prevActiveStep - 1);
};


     return(


       <Container >

         <Grid container spacing={4}>
           <Grid item xs={12} md={6}>



           <div>
             <Paper square elevation={0} >
               <Typography></Typography>
             </Paper>
             <center>
             <img
             className={pclasses.imgcontainer}

               src={tutorialSteps[activeStep].imgPath}
               alt={tutorialSteps[activeStep].label}
             />
             </center>
             <MobileStepper
             className={pclasses.strepper}
               steps={maxSteps}
               position="static"
               variant="text"
               activeStep={activeStep}
               nextButton={
                 <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                   Next

                 </Button>
               }
               backButton={
                 <Button size="small" onClick={handleBack} disabled={activeStep === 0}>

                   Back
                 </Button>
               }
             />
           </div>



           </Grid>
           <Grid container item xs={12} md={6} className={pclasses.productHeader} direction="column">
             <Grid item>
               <Typography variant="h4"> </Typography>
                NIKE
               <Typography
                 variant="caption"
                 display="block"
                 color="secondary"
                 className={pclasses.inStock}
               >
                 In Stock
               </Typography>
             </Grid>
             <Typography variant="body2" className={pclasses.productDescription}>
               In the ‘70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid ’77 Vintage—classic since the beginning.
             </Typography>

             <Typography variant="subtitle2" className={pclasses.price}>
               1300 $
             </Typography>

             <Button
               variant="contained"
               color="primary"

             >
              Buy
             </Button>

             <Grid
               item
               container
               justify="space-between"
               alignItems="center"

             >
               <IconButton
                 className={pclasses.arrowBtn}
                 color="primary"
                 onClick={() => history.goBack()}
               >

               </IconButton>
               <IconButton onClick={() => addToFavs(product)}>

               </IconButton>
             </Grid>
           </Grid>
         </Grid>
       </Container>



     )


}

export default Product_info;
