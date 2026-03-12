import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Protectedroute(){
    const {currentUser} =useAuth();

    if(!currentUser){
        return <Navigate to="/Login" replace/>
    }

}
export default Protectedroute;