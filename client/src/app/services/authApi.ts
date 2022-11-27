import { IAuthenticationResponse, ICredential, IUser } from '../../features/auth/auth.model'
import { api } from './api';

export const authApi = api.injectEndpoints({
    endpoints: (builder) =>({
        registerUser: builder.mutation<IAuthenticationResponse, IUser>({
            query:(user)=>({
                url:'auth/register',
                method: 'POST',
                body:user

            })
        }),
        loginUser: builder.mutation<IAuthenticationResponse,ICredential>({
            query:(credential)=>({
                url:'auth/login',
                method: 'POST',
                body:credential
            })
        })

    })
})


export const {useRegisterUserMutation, useLoginUserMutation} = authApi;