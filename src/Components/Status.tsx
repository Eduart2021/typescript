
// page/data status update

type StatusProps ={
    status: string //'loading'|'success'|'error',
}

export const Status = (props: StatusProps) =>{
    let message
    if(props.status === "loading"){
        message = "Loading..."
    }else if(props.status === "success"){
        message = 'Data fetch successfully'
    }else if(props.status === "error"){
        message = 'Error fetching data'
    }else{
        message= 'Check your spelling'
    }
    return (
        <div>
            <p>Status - {message}</p>
        </div>
    )
}