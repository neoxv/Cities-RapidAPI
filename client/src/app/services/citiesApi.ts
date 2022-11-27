import { IAuthenticationResponse, ICredential, IUser } from '../../features/auth/auth.model'
import { ISearchQuery } from '../../features/home/home.model';
import { ICitiesResponse } from '../../features/home/home.model';

import { remoteApi } from './remoteApi';

export const citiesApi = remoteApi.injectEndpoints({
    endpoints: (builder) =>({
        searchCities: builder.query<ICitiesResponse, ISearchQuery>({
            query:(query)=>({
                url: 'cities',
                params: {
                    limit: query.limit,
                    minPopulation: query.minPopulation,
                    maxPopulation: query.maxPopulation,
                    namePrefix: query.namePrefix,
                    offset: query.offset
                },
            })
        })
       

    })
})


export const {useSearchCitiesQuery} = citiesApi;