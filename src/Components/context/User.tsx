import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User2 = ()=>{
    const userContext = useContext(UserContext)
    const handleLogIn =()=>{
            userContext.setUser({
           name: 'admin',
            email:'admin@admin.com'
            })
    }
    const handleLogOut =()=>{
            userContext.setUser(null)
    }
    return (
        <div>
            <button type="button" onClick={handleLogIn}>Log In</button>
            <button type="button" onClick={handleLogOut}>LogOut</button>
            <div className="name">Welcome {userContext.user?.name}</div>
            <div className="pass">email: {userContext.user?.email}</div>
        </div>
    )

}
// this is the component and assertion is done outside it
// at UserContext file 