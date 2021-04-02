import React from "react";
import useUser from "../lib/useUser"
import fetchJson from "../lib/fetchJson"
import Button from '@material-ui/core/Button'
import { useRouter } from 'next/router'

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
  
    <h1 style={{ marginTop: '3em' }}> Hello, {user.name}</h1>
    <p>This is your profile</p>
    <div className={classes.buttons}>
        
    <Button onClick={actionLogout} variant="contained" color="primary">Logout</Button>
    <Button  href='/edit_account' variant="contained" color="primary">Edit Account Details</Button>
    </div>
    </div>
    </React.Fragment>
  );
};



