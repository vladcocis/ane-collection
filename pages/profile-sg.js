import axios from "axios";
import React from "react";
import useUser from "../lib/useUser";
import { useRouter } from 'next/router'
import fetchJson from "../lib/fetchJson";

const SgProfile = () => {
  const { user, mutateUser } = useUser({ redirectTo: "/account" });
  const router = useRouter()

  if (!user) {
    return <h1>Loading</h1>
  }

  const actionLogout = async (e) => {
    e.preventDefault()
    await mutateUser(fetchJson('/api/auth/logout'))
    router.replace('/account')
  }

  return (
    <React.Fragment>
    <div  style={{ height: '750px' }}>
  
    <h1 style={{ marginTop: '3em' }}> Hello, {user.name}</h1>
    <p>This is your profile</p>
    <button onClick={actionLogout}>Logout</button>
    </div>
    </React.Fragment>
  );
};
export default SgProfile;



