import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState} from 'react';


import {
  Card,
	CardContent,
	CardMedia,
  CardHeader,
  CardActions,
	Grid,
	Button,
	Typography,
} from '@material-ui/core'

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


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '35%',

    marginTop: '13%',
    marginLeft:'5%',
    marginRight:'5%',
  },
  media: {
    height: 350,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  header:{
    flexDirection: 'column',
   alignItems: 'center',

  },
  sub:{
    flexDirection: 'column',
   alignItems: 'center',

   color:'black',
 


  },

  shop:{
  align: 'right',
   textAlign:'right',
  },



}));



const Products_list_card = ({ product }) => {


     const classes = useStyles();
     const [expanded, setExpanded] = React.useState(false);

     const handleExpandClick = () => {
       setExpanded(!expanded);
     };

     const handleClick = (event) =>  {
        event.preventDefault();
         console.log('Free pizza!');
         console.log(event);
     }


     return(


   <Link  href={'/product/'+product.id } >
     <Card className={classes.root}>
         <CardHeader className={classes.header}


           title={product.product_name}

         />
         <CardMedia
           className={classes.media}
           image={product.showroomImg}
           title="Paella dish"
         />
         <CardContent className={classes.sub}>
           <Typography  className={classes.sub} variant="body2" color="textSecondary" component="p">
             {product.category_id}
           </Typography>
          {product.product_desc}
         </CardContent>
         <CardActions disableSpacing>
           <IconButton aria-label="add to favorites">
             <FavoriteIcon />
           </IconButton>
           <IconButton className={classes.shop} onClick={handleClick} aria-label="add to shopping cart">
       <AddShoppingCartIcon onClick={handleClick} />
       </IconButton>


         </CardActions>

       </Card>
</Link>

     )




}

export default Products_list_card;
