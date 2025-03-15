import { createContext, useContext, useEffect, useState } from "react"

export const AuthContext=createContext();
export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token"))
    const setTokenInLS=(serverToken)=>{
      setToken(serverToken)
        return localStorage.setItem("token",serverToken)
    }
    let isLoggedin=!!token;
    //logout functionality
    const LogoutUser=()=>{
        confirm("are you sure to logout from agritradehub")
        setToken("");
        return localStorage.removeItem("token");
    }
    // getting user data from backend
    const [user,setUser]=useState({})
    const userData= async()=>{
      try {
        const response=await fetch("https://agritrade-hub-backend.vercel.app/",{
                 method:"GET",
                 headers:{
                  "Authorization":`Bearer ${token}`
                 }
            })
            if(response.ok){
              const data=await response.json();
              console.log("listings",data.listings)
              const profileData= await data.msg
              setUser(profileData)
            //   console.log(profileData)
            }
          } catch (err) {
            console.log("error while fetching userData",err)
          }
    }
    useEffect(()=>{
      userData()
    },[])
    return <AuthContext.Provider value={{token,setTokenInLS,LogoutUser,isLoggedin,user}}>
                    {children}
    </AuthContext.Provider>
}
export const useAuth=()=>{
    const authContaxtValue=useContext(AuthContext);
    if(!authContaxtValue){
        throw new Error("useAuth is used outside the provider")
    }
    return authContaxtValue;
}
