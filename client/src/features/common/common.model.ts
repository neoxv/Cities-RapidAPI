export interface IError{
    message:string,
    status: boolean,
    subject?: string
}

export interface IPropsInput{
    type:string,
    name: string
    placeholder?:string,
    handler:Function,
    value:string | number
    min?:number
    max?:number
}



export interface IPropsHeader{
    title:string
    style?: object
    username?:string
}

export const ErrorInitialState:any ={message:"",status:false,subject:""}


