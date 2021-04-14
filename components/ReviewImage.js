import React from 'react';
import { CardMedia } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    img_container: {
        height:'100%',
        width: '100%',
    },
    reviewImg: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
    },
  }));


export default function ReviewImage({details}) {
    const classes = useStyles();

    return (
        <div className={classes.img_container}>
            <img className={classes.reviewImg}
			src={`/uploads/${details.img}`}
		/>
        </div>
    )
}
