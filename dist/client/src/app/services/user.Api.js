"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSavedCitiesQuery = exports.useSaveCityMutation = exports.userApi = void 0;
const api_1 = require("./api");
exports.userApi = api_1.api.injectEndpoints({
    endpoints: (builder) => ({
        saveCity: builder.mutation({
            query: (city) => ({
                url: 'cities',
                method: 'POST',
                body: city
            })
        }),
        savedCities: builder.query({
            query: () => ('cities'),
        }),
    })
});
exports.useSaveCityMutation = exports.userApi.useSaveCityMutation, exports.useSavedCitiesQuery = exports.userApi.useSavedCitiesQuery;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5BcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jbGllbnQvc3JjL2FwcC9zZXJ2aWNlcy91c2VyLkFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSwrQkFBNEI7QUFFZixRQUFBLE9BQU8sR0FBRyxTQUFHLENBQUMsZUFBZSxDQUFDO0lBQ3ZDLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUEsQ0FBQztRQUNwQixRQUFRLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBYztZQUNwQyxLQUFLLEVBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFBLENBQUM7Z0JBQ1gsR0FBRyxFQUFDLFFBQVE7Z0JBQ1osTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFDLElBQUk7YUFDWixDQUFDO1NBQ0wsQ0FBQztRQUNGLFdBQVcsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFvQjtZQUMxQyxLQUFLLEVBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDekIsQ0FBQztLQUVMLENBQUM7Q0FDTCxDQUFDLENBQUE7QUFHWSwyQkFBbUIsR0FBeUIsZUFBTyxzQkFBOUIsMkJBQW1CLEdBQUksZUFBTyxxQkFBQyJ9