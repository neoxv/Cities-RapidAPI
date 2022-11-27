import React, { useEffect } from 'react'
import { IPropsHeader } from '../features/common/common.model'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logoutUser, selectAuthenticated } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Header = (props:IPropsHeader) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const handleLogOut = (event: React.FormEvent<HTMLButtonElement>)=>{
      sessionStorage.removeItem('accessToken')
      dispatch(logoutUser)
      navigate('/')
  }

  return (
    <div style={props.style}>
      <div>
        <a 
          onClick={(e)=>navigate('/home')}
          style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontFamily: 'IBM Plex Sans, sans-serif',
            color:"#1D1A31",
            cursor:"pointer"
          }}>
          {props.title.toUpperCase()}
        </a>
      </div>
      <div style={{display:'flex',justifyContent:'space-between', alignItems:'center' }}>
        <a style={{
          display: 'inline', cursor: 'pointer', fontSize: '1rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontFamily: 'IBM Plex Sans, sans-serif',
          color: "#1D1A31" }}
          onClick={(e) => navigate('/saved')}>Saved&nbsp; &nbsp;</a>

        <button style={{
          display: 'inline', cursor: 'pointer', fontSize: '1rem',
          fontWeight: 'bold',
          textDecoration: 'none',
          fontFamily: 'IBM Plex Sans, sans-serif',
          color: "#1D1A31"
          }} onClick={(e) => handleLogOut(e)}>LogOut&nbsp; &nbsp;</button>

      </div>
    </div>

  )
}

export default Header