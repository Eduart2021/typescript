import { useState } from "react"
// user authorization with future values

type AutUser = {
    name: string
    email: string
}

export const User1= ()=>{
    const [user, setUser] = useState<AutUser | null>(null)
   // const [user, setUser] = useState<AutUser>({} as AutUser)  // is a type assertion method
    const handleLogIn = ()=>{
        setUser({
            name: "tom",
            email: "tom@gmail.com"
        })
    }
    const handleLogOut = ()=>{
        setUser(null)
    }

    return (
        <div>
        <button onClick={handleLogIn}>Log In User</button>
        <button onClick={handleLogOut}>Log Out User</button>
        <div>User name is {user?.name}</div>  {/* we can remove '?' from user?, instead use user.name */}
        <div>User email is {user?.email}</div>
        </div>
    )

}