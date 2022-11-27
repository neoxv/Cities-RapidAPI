"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSearchCitiesQuery = exports.citiesApi = void 0;
const remoteApi_1 = require("./remoteApi");
exports.citiesApi = remoteApi_1.remoteApi.injectEndpoints({
    endpoints: (builder) => ({
        searchCities: builder.query({
            query: (query) => ({
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
});
exports.useSearchCitiesQuery = exports.citiesApi.useSearchCitiesQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2l0aWVzQXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9hcHAvc2VydmljZXMvY2l0aWVzQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLDJDQUF3QztBQUUzQixRQUFBLFNBQVMsR0FBRyxxQkFBUyxDQUFDLGVBQWUsQ0FBQztJQUMvQyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFBLENBQUM7UUFDcEIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQWdDO1lBQ3ZELEtBQUssRUFBQyxDQUFDLEtBQUssRUFBQyxFQUFFLENBQUEsQ0FBQztnQkFDWixHQUFHLEVBQUUsUUFBUTtnQkFDYixNQUFNLEVBQUU7b0JBQ0osS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO29CQUNsQixhQUFhLEVBQUUsS0FBSyxDQUFDLGFBQWE7b0JBQ2xDLGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtvQkFDbEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO29CQUM1QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07aUJBQ3ZCO2FBQ0osQ0FBQztTQUNMLENBQUM7S0FHTCxDQUFDO0NBQ0wsQ0FBQyxDQUFBO0FBR1ksNEJBQW9CLEdBQUksaUJBQVMsc0JBQUMifQ==