import React,{useState} from "react";
import axios from "axios";

const AgentLogin=()=>{
    const [number,setNumber]=useState("")
    const handleSubmit=async(e)=>{
        e.preventDefault()

        const response= await axios.post("https://use2fun.onrender.com/agent/loginmobile",{
            number
        })
        if(response.data){
            alert("data has recieved")
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="login-image">
            <img src="https://i.gifer.com/IPNp.gif" alt="" /></div>
            <input type="text" value={number} placeholder="Enter your  number" onChange={(e)=>setNumber(e.target.value)} />
            <button type="submit">Next</button>
        </form>
        </>
    )
}
export default AgentLogin