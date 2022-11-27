export interface IUser{
    email:string,
    password:string,
    username: string
}

export const UserStateInitial:any = {
    email:"",
    password:"",
    username:""
}

export interface ICredential{
    email:"",
    password:""
}

export interface IAuthenticationResponse{
    accessToken?:string | null
    // refreshToken?: string | null
    user: Partial<IUser> |null,
    isAuthenticated: boolean
}


