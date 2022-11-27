"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoginUserMutation = exports.useRegisterUserMutation = exports.authApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.authApi = (0, react_1.createApi)({
    reducerPath: 'apiReducer',
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: 'http://localhost:8080/' }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query: (user) => ({
                url: 'auth/register',
                method: 'POST',
                body: user
            })
        }),
        loginUser: builder.mutation({
            query: (credential) => ({
                url: 'auth/login',
                method: 'POST',
                body: credential
            })
        })
    })
});
exports.useRegisterUserMutation = exports.authApi.useRegisterUserMutation, exports.useLoginUserMutation = exports.authApi.useLoginUserMutation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC9zcmMvZmVhdHVyZXMvYXBpL2F1dGhBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsd0RBQW9FO0FBR3ZELFFBQUEsT0FBTyxHQUFHLElBQUEsaUJBQVMsRUFBQztJQUM3QixXQUFXLEVBQUMsWUFBWTtJQUN4QixTQUFTLEVBQUUsSUFBQSxzQkFBYyxFQUFDLEVBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFDLENBQUM7SUFDOUQsU0FBUyxFQUFFLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQSxDQUFDO1FBQ3BCLFlBQVksRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFpQztZQUMzRCxLQUFLLEVBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRSxDQUFBLENBQUM7Z0JBQ1gsR0FBRyxFQUFDLGVBQWU7Z0JBQ25CLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBQyxJQUFJO2FBRVosQ0FBQztTQUNMLENBQUM7UUFDRixTQUFTLEVBQUUsT0FBTyxDQUFDLFFBQVEsQ0FBc0M7WUFDN0QsS0FBSyxFQUFDLENBQUMsVUFBVSxFQUFDLEVBQUUsQ0FBQSxDQUFDO2dCQUNqQixHQUFHLEVBQUMsWUFBWTtnQkFDaEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFDLFVBQVU7YUFDbEIsQ0FBQztTQUNMLENBQUM7S0FFTCxDQUFDO0NBQ0wsQ0FBQyxDQUFBO0FBRVksK0JBQXVCLEdBQTBCLGVBQU8sMEJBQS9CLDRCQUFvQixHQUFJLGVBQU8sc0JBQUMifQ==