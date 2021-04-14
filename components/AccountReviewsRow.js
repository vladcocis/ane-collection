import React, {useState, useEffect} from "react"
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import ReviewImage from "./ReviewImage";
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '350px',
        marginTop: '1em',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        border: 'solid',
    },
    img_container: {
        height:'100%',
        width: '50%',
    },
  }));

export default function AccountReviewsRow({details}) {
    const classes = useStyles();
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState (false);


    useEffect(() => {
        async function fetchProductImage() {
            const response = await axios.get(`/api/products/image/${details.product_id}`);
      
            if (response.status === 200) {
              setData(response.data.payload);
              setIsLoading(true)
              console.log(response.data.payload)
            }
          }
          fetchProductImage()
      },[]);

      const displayReviewImage = () => {
        return data.map((details,i) => (<ReviewImage key={i} details={details}/>))
    }

    return (
        <div className={classes.container}>
            <div className={classes.img_container}>
            {isLoading ? displayReviewImage() : <p></p>} </div>
            <div className={classes.details_container}> 
                <p><b>Product name:{' '}</b>{details.product_name}</p>
                <p><b>Product category:{' '}</b>{details.product_category}</p>
                <p><b>Rating:{' '}</b>{details.rating}</p>
                <p><b>Review:{' '}</b>{details.message}</p>
            </div>
            
        </div>
      );

}