import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid} from '@fortawesome/fontawesome-svg-core/import.macro' 
import { ISearchQuery, SearchQueryInitialState } from '../features/home/home.model'
import InputComponent from './InputComponent'
import { useAppDispatch } from '../app/hooks'
import { setQuery } from '../features/home/homeSlice'

const SearchBarComponent = (props:any) => {
    const [searchQuery, setSearchQuery] = useState<ISearchQuery>(SearchQueryInitialState)
    const dispatch = useAppDispatch()
    

    const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget
        setSearchQuery({ ...searchQuery, [name]: value })
    }

    const HandleSubmit = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault()
        dispatch(setQuery(searchQuery))
    }
    

  return (
      <div className="wrap">
          <div className="search" style={{display:"flex", justifyContent:"space-between"}}>
              <div className="form-group mt-3">
                  <label>City Prefix</label>
                  <InputComponent type='text' placeholder='City Prefix' handler={handleInput} value={searchQuery.namePrefix} name="namePrefix" />
              </div>
              <div className="form-group mt-3">
                  <label>Min Population</label>
                  <InputComponent type='number'  handler={handleInput} value={searchQuery.minPopulation} name="minPopulation" />
              </div>
              <div className="form-group mt-3">
                  <label>Max Population</label>
                  <InputComponent type='number'  handler={handleInput} value={searchQuery.maxPopulation} name="maxPopulation" />
              </div>
              <div className="form-group mt-3">
                  <label>Limit</label>
                  <InputComponent max={10} type='number' handler={handleInput} value={searchQuery.limit} name="limit" />
              </div>
              <div style={{alignSelf:"end"}}>
                  <button type="submit" className="searchButton" onClick={(e) => HandleSubmit(e)} >
                      <FontAwesomeIcon icon={solid('magnifying-glass')} /> Find City
                  </button>
              </div>
          </div>
      </div>
  )
}

export default SearchBarComponent