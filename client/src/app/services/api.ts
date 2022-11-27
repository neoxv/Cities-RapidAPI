import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'
import { RootState } from '../store'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:8080/',
  prepareHeaders: (headers, { getState }) => {
    const token = sessionStorage.getItem('accessToken')
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })
export const api = createApi({
  reducerPath: 'localApi',
  baseQuery: baseQuery,
  tagTypes: ['Cities'],
  endpoints: () => ({}),
})

