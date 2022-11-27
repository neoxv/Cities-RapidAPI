import React, { useEffect, useState } from 'react'
import { ErrorInitialState, IError } from '../common/common.model'
import "./auth.css"
import { ICredential, IUser, UserStateInitial } from './auth.model'
import { useRegisterUserMutation, useLoginUserMutation } from '../../app/services/authApi'
import InputComponent from '../../components/InputComponent'
import {  useAppSelector } from '../../app/hooks'
import {  selectAuthenticated } from './authSlice'
import { useNavigate } from 'react-router-dom'
import FormComponent from '../../components/FormComponent'

const AuthPage = () => {
    const [formDetail, setFormDetail] = useState({
        title:"Sign In",
        subtitle:"Not registered yet?",
        option :"Sign Up",
        signIn: true
    })
    const [user, setUser] = useState<IUser>(UserStateInitial)
    const [inputInputError, setInputError] = useState<IError>(ErrorInitialState)
    const [registerUser] = useRegisterUserMutation()
    const [loginUser] = useLoginUserMutation()
    const isAuthenticated = useAppSelector(selectAuthenticated)
    const navigate = useNavigate()

   useEffect(() => {
    if(isAuthenticated){
         navigate('/home')
    }else{
         navigate('/')
    }
   }, [isAuthenticated])
    

    const changeAuthMode = () => {
        setFormDetail(formDetail.signIn?{
            title: "Sign Up",
            subtitle: "Already Registered?",
            option: "Sign In",
            signIn: false
        } : {
            title: "Sign In",
            subtitle: "Not registered yet?",
            option: "Sign Up",
            signIn: true
        })
    }

    const handleSubmit = async(event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
       if(user.email === "" || user.password === "" || (!formDetail.signIn && user.username === "")){
            setInputError({message:"Please enter a valid input!", status:true})
       }
       if(user.password.length < 6){
            setInputError({message:"Password must be more than 6 characters", status:true})
       }
       if(emailValidator(user.email)){
            if(formDetail.signIn){
                await loginUser({email:user.email, password:user.password} as ICredential)
                    .unwrap()
                    .catch((error)=>{
                        setInputError({ status: true, message: error.data.errors[0].msg })
                    })
            }else{
                await registerUser(user)
                .unwrap()
                .catch((error)=>{
                    setInputError({ status: true, message: error.data.errors[0].msg })
                })
            }
       }
    }
    const emailValidator = (email:string)=>{
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(email) === false) {
            return false;
        }
        return true;
    }

    const handleInput = (event: React.FormEvent<HTMLInputElement>) =>{
        const {name, value} = event.currentTarget
        setUser({...user,[name]:value})
        setInputError(ErrorInitialState)
    }

    return (
        <FormComponent>
            <h3 className="Auth-form-title">{formDetail.title}</h3>
            <div className="text-center">
                {formDetail.subtitle}{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                    {formDetail.option}
                </span>
                {inputInputError.status ? <p style={{ color: "red" }}>{inputInputError.message}</p> : null}
            </div>
            {!formDetail.signIn ? (
                <div className="form-group mt-3">
                    <label>Username</label>
                    <InputComponent type='text' placeholder='Username' handler={handleInput} value={user.username} name="username" />
                </div>) : null}

            <div className="form-group mt-3">
                <label>Email address</label>
                <InputComponent type='email' placeholder='Email' handler={handleInput} value={user.email} name="email" />
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <InputComponent type='password' placeholder='Password' handler={handleInput} value={user.password} name="password" />
            </div>
            <div className="d-grid gap-2 mt-3 mb-3">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </FormComponent>
    )
}

export default AuthPage
