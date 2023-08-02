import React,{useState}from "react";
import "./Sidebar.css"

const Sidebar=()=>{
    const [selected,setSelected]=useState("User")

    return(
        <div className="container-sidebar">
            <div className="sidebar">
<ul>
    <li onClick={()=>setSelected("User")}>User</li>
</ul>
            </div>
            {selected === "User" ? (<User/>):null}
        </div>
    )
}
export default Sidebar