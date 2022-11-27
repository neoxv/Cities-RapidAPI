import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Header from '../../components/Header'
import ListItemComponent from '../../components/ListItemComponent'
import ListComponent from '../../components/ListComponent'
import './home.css'
import { ICity } from './home.model'
import { useSavedCitiesQuery } from '../../app/services/user.Api'
import { logoutUser } from '../auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Saved = () => {
    const { data, isLoading, isError } = useSavedCitiesQuery()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useEffect(() => {
        console.log(sessionStorage.getItem('accessToken'))
        if(sessionStorage.getItem('accessToken') === undefined || sessionStorage.getItem('accessToken') === null){
            dispatch(logoutUser)
            navigate('/')
        }
    }, [])
    
    return (
        <>
            <Header title='Cities.' style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            }} />
            {isLoading ? (<h5 style={{ textAlign: "center" }}>Loading Saved Cities ... </h5>) : null}
            {isError ? (<h5 style={{ textAlign: "center", color: 'red' }}>Error Loading Saved Cities! </h5>) : null}
            <ListComponent>
                {data?.map((city: ICity) => {
                    return <ListItemComponent data={city} key={city.id}  saved={true}/>
                })
                }
            </ListComponent>
        </>

    )
}

export default Saved

