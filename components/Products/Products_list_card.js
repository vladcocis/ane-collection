import React from 'react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import _ from 'lodash'


import {
  Card,
  CardContent,
  CardMedia,
  CardHeader,
  CardActions,
  Grid,
  Container,
  Typography,
} from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';


const useStyles = makeStyles((theme) => ({
  root: {


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
  header: {
    flexDirection: 'column',
    alignItems: 'center',

  },
  sub: {
    flexDirection: 'column',
    alignItems: 'center',

    color: 'black',



  },

  shop: {
    align: 'right',
    textAlign: 'right',
  },



}));



const Products_list_card = ({ products }) => {



  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log('Free pizza!');
    console.log(event);
  }

  return (
    <Container style={{marginTop: '5em'}}>

      <Grid container spacing={2}>

        {_.map(products, (it) => {
          return (
            <Grid item xs={12} md={3} key={it.id}>
              <Link href={'/product/' + it.id} >
                <Card className={classes.root}>
                  <CardHeader className={classes.header}


                    title={it.product_name}

                  />
                  <CardMedia
                    className={classes.media}
                    //image={it.showroomImg}
                    image={`https://miro.medium.com/max/2560/1*DurBxFRmQ_bCn8ustfKz7g.jpeg`}
                    title={it.product_name}
                  />
                  <CardContent className={classes.sub}>
                    <Typography className={classes.sub} variant="body2" color="textSecondary" component="p">
                      {it.category_id}
                    </Typography>
                    {it.product_desc}
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton className={classes.shop} onClick={handleClick} aria-label="add to shopping cart">
                      <AddShoppingCartIcon />
                    </IconButton>


                  </CardActions>

                </Card>
              </Link>
            </Grid>
          )
        })}



      </Grid>

    </Container>
  )



}

export default Products_list_card;