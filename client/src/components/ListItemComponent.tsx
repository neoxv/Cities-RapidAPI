import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { ICity } from '../features/home/home.model'
import { useSaveCityMutation } from '../app/services/user.Api'
import { useAppDispatch } from '../app/hooks'
import { logoutUser } from '../features/auth/authSlice'

const ListItemComponent = (props:{data:ICity, saved:boolean}) => {
  const {data}= props
  const [saveCity] = useSaveCityMutation()
  const [saved, setSaved] = useState(false)
  const dispatch = useAppDispatch()

  const handleSave = (event:any)=>{
    if(!props.saved){
      try {
        saveCity(data).unwrap()
        setSaved(true)
      } catch (error: any) {
        if (error.statusCode && (error.statusCode == 401 || error.statusCode == 403)) {
          dispatch(logoutUser)
        }
      }
    }

  }

  return (
        <div className="card card-1" style={{display:"flex", justifyContent:"flex-start"}}>
          <div className='mb-2' style={{
            display:"flex",
            justifyContent:"space-between"
          }}>
            <div className="card__icon">
              <FontAwesomeIcon icon={solid('tree-city')} />
            </div>
        <a onClick={(e) => handleSave(e)} className="card__exit card__link"><FontAwesomeIcon icon={solid('bookmark')} style={saved ? { color: "#1D1A31" } :{}} /></a>
          </div>
          
          <h5 className="card__title">City: &nbsp;{data.city}</h5>
          <h5 className="card__title">Region: &nbsp;{data.region}</h5>
          <h5 className="card__title">Country: &nbsp;{data.country}</h5>
          <h5 className="card__title">Coordinates: &nbsp;{data.latitude},&nbsp;{data.longitude}</h5>
        </div>
  )
}

export default ListItemComponent