import { createSlice } from '@reduxjs/toolkit'
import { authApi } from '../../app/services/authApi'
import { RootState } from '../../app/store'
import { IAuthenticationResponse } from './auth.model'

const initialState:IAuthenticationResponse = {
    user: null,
    isAuthenticated: false
  }
export const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.isAuthenticated = false
    },
  },
  extraReducers:(builder) =>{
    builder.addMatcher(authApi.endpoints.registerUser.matchFulfilled,(state,action)=>{
      state.isAuthenticated = true
      sessionStorage.setItem('accessToken', action.payload.accessToken!)
    }).addMatcher(authApi.endpoints.loginUser.matchFulfilled,(state,action)=>{
      state.isAuthenticated = true
      sessionStorage.setItem('accessToken',action.payload.accessToken!)
    })
  }
})

export const { logoutUser } = authSlice.actions


export const selectAuthenticated = (state: RootState) => state.authState.isAuthenticated

export default authSlice.reducer
