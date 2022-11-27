import { ICity } from '../../features/home/home.model';
import { api } from './api';

export const userApi = api.injectEndpoints({
    endpoints: (builder) =>({
        saveCity: builder.mutation<void, ICity>({
            query:(city)=>({
                url:'cities',
                method: 'POST',
                body:city
            }),
            invalidatesTags:['Cities']
        }),
        savedCities: builder.query<Array<ICity>,void>({
            query:() => ('cities'),
            providesTags:['Cities']
        }),

    })
})


export const {useSaveCityMutation, useSavedCitiesQuery} = userApi;