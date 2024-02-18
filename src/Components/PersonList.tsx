import { Name } from '../Components/Persons.types'
// working with types in typescript react
// we heve array types
// we can also import a reuseble type object from person.type class



type personListProps = {
    name:Name[]
}

export const PersonList = (props: personListProps)=>{
    return <div>
        <p>{props.name.map((name,id)=>{
            return <div key={id}>
                <p>{name.first} {name.last}</p>
            </div>
        })}</p>
    </div>
}