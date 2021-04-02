import Profile from "../components/Profile";
import useUser from "../lib/useUser"

const profile =() =>{
    const { user } = useUser({ redirectTo: "/account" });

  if (!user) {
    return <h1>Loading</h1>
  }
    return(
        <div>
            <Profile />
        </div>
    )
}

export default profile;