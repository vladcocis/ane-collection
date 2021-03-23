import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import axios from "axios";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    marginLeft: '1%',
    marginRight: '1%',
    marginTop: '5%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  },

  header: {
    marginLeft: '2rem',

  },

}));

const Product_comment = ({ comments }) => {
  const classes = useStyles();

  const [comment, setComment] = useState({});

      comment ?? <h2>Loading...</h2>;


        useEffect(() => {
          async function fetchAppointments() {
            const response = await axios.get(`/api/products/comments/${comments}`);

            setComment(response.data.payload);
          }

          fetchAppointments();
        }, []);



        const [user, setUser] = useState({});

            user ?? <h2>Loading...</h2>;


              useEffect(() => {
                async function fetchAppointments() {
                  const response = await axios.get(`/api/products/username/`);

                  setUser(response.data.payload);
                }

                fetchAppointments();
              }, []);


  return (
    <div>


      <List className={classes.root}>
        <h1 className={classes.header} >Comments</h1>


        {_.map(comment, (c) => {  return(

          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="" src="https://icons-for-free.com/iconfiles/png/512/comment-131965017416332557.png" />
            </ListItemAvatar>
            <ListItemText
              primary={_.map(user, (u) => {  return(u.id==c.user_id ? ( u.name) :('') )})}
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    {c.message}
                  </Typography>
              <p>   { "Rating: "+c.rating} </p>
                </React.Fragment>
              }
            />

          </ListItem>




        )})}

      </List>

    </div>

  );
}

export default Product_comment;
