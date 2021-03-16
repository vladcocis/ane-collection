import axios from "axios";
import React from "react";
import useUser from "../lib/useUser";
import { useRouter } from 'next/router'
import fetchJson from "../lib/fetchJson";

const SgProfile = () => {
  const { user, mutateUser } = useUser({ redirectTo: "/login" });
  const router = useRouter()

  if (!user) {
    return <h1>Loading</h1>
  }

  const actionLogout = async (e) => {
    e.preventDefault()
    await mutateUser(fetchJson('/api/auth/logout'))
    router.replace('/login')
  }

  return (
    <React.Fragment>
      <h1>Your GitHub profile</h1>
      <h2>
        This page uses{" "}
        <a href="https://nextjs.org/docs/basic-features/pages#static-generation-recommended">
          Static Generation (SG)
        </a>{" "}
        and the <a href="/api/auth/user">/api/user</a> route (using{" "}
        <a href="https://github.com/zeit/swr">zeit/SWR</a>)
      </h2>

      <p style={{ fontStyle: "italic" }}>
        Public data, from{" "}
        <a href={githubUrl(user.login)}>{githubUrl(user.login)}</a>, reduced to
        `login` and `avatar_url`.
      </p>
      <pre>{JSON.stringify(user, undefined, 2)}</pre>

      {<img src={user.avatar_url} />}

      <button onClick={actionLogout}>Logout</button>
    </React.Fragment>
  );
};

function githubUrl(login) {
  return `https://api.github.com/users/${login}`;
}

export default SgProfile;