import { useState } from "react"
// useState Hook


export const LoggIn = ()=>{

    const [isLoggedin, setIsLoggedin] = useState(false)
    
    const handleLogIn=()=>{
        setIsLoggedin(true)
    }
    const handleLogOut=()=>{
        setIsLoggedin(false)
    }
    return (
        <div>
             <button onClick={handleLogIn}>Log In</button>
             <button onClick={handleLogOut}>Log Out</button>
            <div>User is {isLoggedin ? 'logged in' : 'logged out'}</div>
        </div>
    )
}