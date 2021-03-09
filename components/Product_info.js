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
    maxWidth: 345,
    marginTop: '13%',
    marginLeft:'20%',
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
   flex:1,
   color:'black'

  },

  leftdiv:{


    maxWidth: "50%",
    marginTop: '1%',
    marginLeft:'1%',
        flexDirection: 'column',
         display: "flex",

  },

  img:{

  maxWidth: "100%",


},

img:{

maxWidth:'50%',
  marginLeft:'20%',
  marginRight:'20%',
   flexDirection: 'column',
  alignItems: 'center',


},



}));



const Product_info = ({ product, product_images, product_eviews }) => {

const classes = useStyles();


     return(
<div>



<h1>s</h1>

<div >


<img className={classes.img,classes.img} src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/72a58094-d560-41f7-80a3-7f16385325d0/air-vapormax-2020-fk-ayakkabısı-BhRhR9.jpg" />

</div>





</div>



     )


}

export default Product_info;
