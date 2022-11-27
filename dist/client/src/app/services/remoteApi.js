"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
const baseQuery = (0, react_1.fetchBaseQuery)({
    baseUrl: 'https://wft-geo-db.p.rapidapi.com/v1/geo/',
    prepareHeaders: (headers, { getState }) => {
        headers.set('X-RapidAPI-Key', `${process.env.REACT_APP_RAPID_API_KEY}`);
        headers.set('X-RapidAPI-Host', 'wft-geo-db.p.rapidapi.com');
        return headers;
    },
});
exports.remoteApi = (0, react_1.createApi)({
    reducerPath: 'remoteApi',
    baseQuery: baseQuery,
    endpoints: () => ({}),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVtb3RlQXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9hcHAvc2VydmljZXMvcmVtb3RlQXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUF3RTtBQUd4RSxNQUFNLFNBQVMsR0FBRyxJQUFBLHNCQUFjLEVBQUM7SUFDL0IsT0FBTyxFQUFFLDJDQUEyQztJQUNwRCxjQUFjLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQTtRQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFDLDJCQUEyQixDQUFDLENBQUE7UUFFNUQsT0FBTyxPQUFPLENBQUE7SUFDaEIsQ0FBQztDQUNGLENBQUMsQ0FBQTtBQUVXLFFBQUEsU0FBUyxHQUFHLElBQUEsaUJBQVMsRUFBQztJQUNqQyxXQUFXLEVBQUUsV0FBVztJQUN4QixTQUFTLEVBQUUsU0FBUztJQUNwQixTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7Q0FDdEIsQ0FBQyxDQUFBIn0=