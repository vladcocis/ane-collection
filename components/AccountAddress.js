import React, {useState, useEffect} from "react";
import EditAccountAddress from "./EditAccountAddress";
import useUser from "../lib/useUser";
import axios from "axios";

const edit_account =() =>{
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState (false);

    
    const { user} = useUser({ redirectTo: "/account" });
    
    useEffect(() => {
        if (!user) {
            return <h1>Loading</h1>
          }
            const id = user.id
            async function fetchAccountAddress() {
            const response = await axios.get(`/api/address/${id}`);
      
            if (response.status === 200) {
              setData(response.data.payload);
              setIsLoading(true)
              console.log(response.data.payload)
            }
          }
          fetchAccountAddress()
      },[user]);

      const displayAccountAddress = () => {
        return data.map((details,i) => (<EditAccountAddress key={i} details={details}/>))
    }

    return(
        <React.Fragment>
            <div >
        
            <h1 > You can edit your addresses details here</h1>
            {isLoading ? displayAccountAddress() : <p></p>}
   
            
            </div>
    </React.Fragment>
    )
}

export default edit_account;