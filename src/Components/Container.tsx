import React from "react"

type ContaineProps ={
    style: React.CSSProperties
}

export const Containe = (props: ContaineProps)=>{
    return (
        <div style={props.style}>
            Text is in style mode
        </div>
    )
}