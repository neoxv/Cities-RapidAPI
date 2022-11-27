"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
const baseQuery = (0, react_1.fetchBaseQuery)({
    baseUrl: 'http://localhost:8080/',
    prepareHeaders: (headers, { getState }) => {
        const token = sessionStorage.getItem('accessToken');
        console.log('token', token);
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});
const baseQueryWithRetry = (0, react_1.retry)(baseQuery, { maxRetries: 6 });
exports.api = (0, react_1.createApi)({
    reducerPath: 'localApi',
    baseQuery: baseQuery,
    //   tagTypes: ['Time', 'Posts', 'Counter'],
    endpoints: () => ({}),
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9hcHAvc2VydmljZXMvYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHdEQUErRTtBQUcvRSxNQUFNLFNBQVMsR0FBRyxJQUFBLHNCQUFjLEVBQUM7SUFDL0IsT0FBTyxFQUFFLHdCQUF3QjtJQUNqQyxjQUFjLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO1FBQ3hDLE1BQU0sS0FBSyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDbkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUE7UUFDMUIsSUFBSSxLQUFLLEVBQUU7WUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxVQUFVLEtBQUssRUFBRSxDQUFDLENBQUE7U0FDaEQ7UUFDRCxPQUFPLE9BQU8sQ0FBQTtJQUNoQixDQUFDO0NBQ0YsQ0FBQyxDQUFBO0FBRUYsTUFBTSxrQkFBa0IsR0FBRyxJQUFBLGFBQUssRUFBQyxTQUFTLEVBQUUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNqRCxRQUFBLEdBQUcsR0FBRyxJQUFBLGlCQUFTLEVBQUM7SUFDM0IsV0FBVyxFQUFFLFVBQVU7SUFDdkIsU0FBUyxFQUFFLFNBQVM7SUFDdEIsNENBQTRDO0lBQzFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztDQUN0QixDQUFDLENBQUEifQ==