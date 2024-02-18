import { GreetProps } from "./Persons.types"
// working with types in typescript react
// we heve String, Number, boolean
// type GreetProps = {
//     name: string
//     messageCount: number
//     isLoggedin: boolean
// }

export const Greeting = (props: GreetProps) => {
    return <div>
        {props.isLoggedin ? <h2>Welcome to typeScript {props.name}!</h2> : <h2>{props.messageCount}</h2>}
    </div>
}
