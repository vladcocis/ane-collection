import React, {useState, useEffect} from "react";
import useUser from "../lib/useUser";
import axios from "axios";
import EditAccountDetails from "../components/EditAccountDetails";
import AccountAddress from "../components/AccountAddress";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    minHeight: '750px',
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
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
        async function fetchAccountDetails() {
            const response = await axios.get(`/api/user/${id}`);
      
            if (response.status === 200) {
              setData(response.data.payload);
              setIsLoading(true)
              //console.log(response.data.payload)
            }
          }
          fetchAccountDetails()
      },[user]);

      const displayAccountDetails = () => {
          return data.map((details,i) => (<EditAccountDetails key={i} details={details}/>))
      }

    return(
            <div  className={classes.root}>
        
            <h1 > You can edit your account details here</h1>
            {isLoading ? displayAccountDetails() : <p></p>}
            <AccountAddress/>
            
            </div>
    )
}

export default edit_account;