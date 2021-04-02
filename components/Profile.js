import React from "react";
import useUser from "../lib/useUser"
import { makeStyles } from '@material-ui/core/styles'
import fetchJson from "../lib/fetchJson"
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'

const useStyles = makeStyles((theme) => ({
    root: {
		height: 700,
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
    buttons: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: theme.spacing(3),
    },
  }));

export default function Profile() {
    const classes = useStyles();
    const { user, mutateUser } = useUser({ redirectTo: "/account" });
    const router = useRouter()

  const actionLogout = async (e) => {
    e.preventDefault()
    await mutateUser(fetchJson('/api/auth/logout'))
    router.replace('/account')
  }

  return (
    <React.Fragment>
    <div className={classes.root} style={{ height: '750px' }}>
  
    <h1 style={{ marginTop: '3em' }}> Hello, this is your profile page</h1>
    <p>You can choose to perform any of the actions from below.</p>
    <div className={classes.buttons}>
        
    <Button onClick={actionLogout} variant="contained" color="primary">Logout</Button>
    <Button  href='/edit_account' variant="contained" color="primary">Edit Account Details</Button>
    </div>
    </div>
    </React.Fragment>
  );
};



