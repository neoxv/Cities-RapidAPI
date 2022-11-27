import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { citiesApi } from '../../app/services/citiesApi';
import { RootState } from '../../app/store';
import { ICity, ISearchQuery, SearchQueryInitialState } from './home.model';

interface IHomeState {
  cities: Array<ICity>
  query: ISearchQuery
}

const initialState: IHomeState = {
  cities:[],
  query:SearchQueryInitialState
};

export const homeSlice = createSlice({
  initialState,
  name: 'homeSlice',
  reducers: {
    setQuery:(state,action: PayloadAction<ISearchQuery>)=>{
      state.query = action.payload
    }

  }
});


export const { setQuery } = homeSlice.actions;

export const selectQuery = (state: RootState) => state.homeState.query


export default homeSlice.reducer