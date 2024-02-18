import { PersonProps } from "./Persons.types"


// working with types in typescript react
// we heve object type
// in big project we will need to move types in a separate folder 
// just import it and it will be available

// type PersonProps = {
//     name: {
//         first: string,
//         last: string,
//     }
// }
export const Person = (props: PersonProps) => {
    return <div>{props.name.first} {props.name.last}</div>
}

