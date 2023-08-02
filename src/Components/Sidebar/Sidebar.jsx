import React,{useState}from "react";
import "./Sidebar.css"
import Mannageuser from "../Mannageuser/Mannageuser";

const Sidebar=()=>{
    const [selected,setSelected]=useState("User")

    return(
        <div className="container-sidebar">
            <div className="sidebar">
<ul>
    <li onClick={()=>setSelected("User")}>User</li>
</ul>
            </div>
            {selected === "User" ? (<Mannageuser/>):null}
        </div>
    )
}
export default Sidebar