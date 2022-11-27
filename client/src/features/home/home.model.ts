export const SearchQueryInitialState:ISearchQuery={
    namePrefix:"",
    limit:10,
    minPopulation:0,
    maxPopulation:0,
    offset:0
}

export interface ISearchQuery{
   namePrefix:string,
   limit:number,
   minPopulation:number,
   maxPopulation:number,
   offset:number
}

export interface ICity{
    id:number
    wikiDataId:string
    type:string
    city:string
    name:string
    country:string,
    countryCode:string
    region:string
    regionCode:string
    latitude:number
    longitude:number
    population:number
}

export interface ILink{
    rel:string,
    href:string
}

export interface ICitiesResponse{
    data:Array<ICity>
    links:Array<ILink>
    metadata:{currentOffset:number, totalCount: number}

}