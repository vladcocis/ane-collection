import React, {useState} from "react"
import Expire from "./Expire";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
        padding: '10px',
    },
    container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
        padding: '5px',
    },
    button: {
		marginTop:'10px',
    },
  }));

export default function EditAccountDetails({details}) {
    const classes = useStyles();

    const [address,setAddress] = useState(details.address);
    const [addressHelper, setAddressHelper] = useState('');
    const [errorMsg, setErrorMsg] = useState("");
    const [edit,setEdit] = useState(false);

    const toggleEdit = () => {
        setEdit(!edit);
    }
    
	const valueChangeHandler = (event) => {
        const value = event.target.value;
        switch (event.target.name) {
            case 'address': {
                setAddress(value);
                if (address.length < 5) {
                    setAddressHelper('Address name must be at least 5 characters long');
                } else {
                    setAddressHelper('');
                }
                break;
            }
            default:
                break;
        }
    }

    
    const actionEditAccountAddress = async (e) => {
		e.preventDefault()

		const body = {
            id: details.user_id,
			user_address: address,
            address_id: details.id
		}

		// if (no errors) =>
		const response = await axios.put('/api/address/edit', body)
		if(response.data.status == 200) {
            toggleEdit(),
			setErrorMsg(response.data.payload)
		} else {
			setErrorMsg('Something went wrong, try again.')
		}
	}

    
	const getEditButton =() => {
		return (
			<Button 
                    className={classes.button}
                    variant="contained" 
                    color="secondary" 
                    onClick={toggleEdit}
                    startIcon={<EditIcon/>}>Edit</Button>
		)
	}

    const getSaveButton =() => {
		return (
			<Button 
                    className={classes.button}
                    variant="contained" 
                    color="secondary" 
                    onClick={actionEditAccountAddress}
                    disabled={addressHelper.length !== 0}
                    startIcon={<SaveIcon/>}>Save</Button>
		)
	}


  return (
    <React.Fragment>
        <div>
           <form className={classes.root} noValidate autoComplete="off">
           <Grid container spacing={2} className={classes.container}>
           
            <TextField 
                    fullWidth
                    id="outlined-basic" 
                    label="Address" 
                    variant="outlined" 
                    type="address"
                    name="address"
                    defaultValue={details.address}
                    onChange={valueChangeHandler}
                    disabled={!edit}
                    helperText={addressHelper}
					error={addressHelper.trim().length !== 0}
                    ></TextField>
                    </Grid>
                    {errorMsg.length>0 && <Expire delay="5000">{errorMsg}</Expire>  }
                    {edit? getSaveButton() : getEditButton()}
                    </form>
        </div>
    </React.Fragment>
  );
};



