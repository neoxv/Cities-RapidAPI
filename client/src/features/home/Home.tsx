import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import Header from '../../components/Header'
import ListItemComponent from '../../components/ListItemComponent'
import ListComponent from '../../components/ListComponent'
import SearchBarComponent from '../../components/SearchBarComponent'
import './home.css'
import { ICity } from './home.model'
import { selectQuery } from './homeSlice'
import { useSearchCitiesQuery } from '../../app/services/citiesApi'
import { logoutUser, selectAuthenticated } from '../auth/authSlice'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let query = useAppSelector(selectQuery)
  const {data,isLoading, isError}=useSearchCitiesQuery(query)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(sessionStorage.getItem('accessToken'))
    if (sessionStorage.getItem('accessToken') === undefined || sessionStorage.getItem('accessToken') === null) {
      dispatch(logoutUser)
      navigate('/')
    }
  }, [])
  

  return (
    <>
      <Header title='Cities.' style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
      }} />
      <SearchBarComponent subtitle='What city are you looking for?'  />
      {isLoading ? (<h5 style={{ textAlign: "center" }}>Loading Cities ... </h5>) : null}
      {isError ? (<h5 style={{ textAlign: "center",color:'red' }}>Error Loading Cities! </h5>) : null}
      <ListComponent>
        {data?.data.map((city:ICity)=>{
             return <ListItemComponent data={city} key={city.id} saved={false} />
          })
        }
      </ListComponent>
    </>
    
  )
}

export default Home