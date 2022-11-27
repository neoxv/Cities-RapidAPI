"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoginUserMutation = exports.useRegisterUserMutation = exports.authApi = void 0;
const api_1 = require("./api");
exports.authApi = api_1.api.injectEndpoints({
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aEFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC9zcmMvYXBwL3NlcnZpY2VzL2F1dGhBcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsK0JBQTRCO0FBRWYsUUFBQSxPQUFPLEdBQUcsU0FBRyxDQUFDLGVBQWUsQ0FBQztJQUN2QyxTQUFTLEVBQUUsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFBLENBQUM7UUFDcEIsWUFBWSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQWlDO1lBQzNELEtBQUssRUFBQyxDQUFDLElBQUksRUFBQyxFQUFFLENBQUEsQ0FBQztnQkFDWCxHQUFHLEVBQUMsZUFBZTtnQkFDbkIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFDLElBQUk7YUFFWixDQUFDO1NBQ0wsQ0FBQztRQUNGLFNBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFzQztZQUM3RCxLQUFLLEVBQUMsQ0FBQyxVQUFVLEVBQUMsRUFBRSxDQUFBLENBQUM7Z0JBQ2pCLEdBQUcsRUFBQyxZQUFZO2dCQUNoQixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUMsVUFBVTthQUNsQixDQUFDO1NBQ0wsQ0FBQztLQUVMLENBQUM7Q0FDTCxDQUFDLENBQUE7QUFHWSwrQkFBdUIsR0FBMEIsZUFBTywwQkFBL0IsNEJBQW9CLEdBQUksZUFBTyxzQkFBQyJ9