import React, {useState, useEffect} from "react";
import AccountReviewsRow from "../components/AccountReviewsRow";
import useUser from "../lib/useUser";
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      minHeight: '750px',
		marginTop: theme.spacing(8),
    padding: '1em',
    display: 'flex',
    flexDirection: 'column'
    },
  }));


const edit_account =() =>{
    const classes = useStyles();

    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState (false);

    
    const { user} = useUser({ redirectTo: "/account" });
    
    useEffect(() => {
        if (!user) {
            return <h1>Loading</h1>
          }
          const id = user.id
        async function fetchAccountReviews() {
            const response = await axios.get(`/api/user_review/${id}`);
      
            if (response.status === 200) {
              setData(response.data.payload);
              setIsLoading(true)
              console.log(response.data.payload)
            }
          }
          fetchAccountReviews()
      },[user]);

      const displayAccountReviews = () => {
          return data.map((details,i) => (<AccountReviewsRow key={i} details={details}/>))
      }

    return(
        <div className={classes.root}>
           
            <h1 > You take a look at all of your past reviews on this page.</h1>
            {isLoading ? displayAccountReviews() : <p></p>}
            
    </div>
    )
}

export default edit_account;