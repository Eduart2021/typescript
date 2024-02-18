import React from "react"

// input event 
// no value is in place just for the on change event

type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputValue = (props: InputProps)=>{
    return <input type='text' title="enterVal" value={props.value} onChange={props.handleChange}/>
}
// by using distactive option and it is usefull
// instead of using props:...   instead use {value, handleChange}
// for example:
// export const InputValue = ({value, handleChange}: InputProps)=>{
//     return <input type='text' title="enterVal" value={value} onChange={handleChange}/>
// }