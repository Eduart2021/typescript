
export type Name ={
    first: string,
    last: string,
}

export type PersonProps = {
    name: Name
}

export type GreetProps = {
    name: string
    messageCount: number
    isLoggedin: boolean
}