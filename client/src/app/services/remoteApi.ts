import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://wft-geo-db.p.rapidapi.com/v1/geo/',
  prepareHeaders: (headers, { getState }) => {
      headers.set('X-RapidAPI-Key', `${process.env.REACT_APP_RAPID_API_KEY}`)
      headers.set('X-RapidAPI-Host','wft-geo-db.p.rapidapi.com')
      
    return headers
  },
})

export const remoteApi = createApi({
  reducerPath: 'remoteApi',
  baseQuery: baseQuery,
  endpoints: () => ({}),
})

