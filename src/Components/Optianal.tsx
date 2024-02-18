
// optional componenet 
// use ? or variable const {message = 0}=props

type GreetingProps = {
    name: string
    message?: number
    isLoading: boolean
}

export const Optional = (props: GreetingProps)=>{
    //distruction for message props
    const {message = 0 } = props
    return (
        <div>
            <p>
                {props.isLoading
                ? `${props.name} optional message is ${message} !` : 'Optional class is not loading'}
            </p>
        </div>
    )
}