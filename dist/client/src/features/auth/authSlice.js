"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectAuthenticated = exports.logoutUser = exports.authSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const authApi_1 = require("../../app/services/authApi");
const initialState = {
    user: null,
    isAuthenticated: false
};
exports.authSlice = (0, toolkit_1.createSlice)({
    name: 'authState',
    initialState,
    reducers: {
        logoutUser: (state) => {
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(authApi_1.authApi.endpoints.registerUser.matchFulfilled, (state, action) => {
            state.isAuthenticated = true;
            sessionStorage.setItem('accessToken', action.payload.accessToken);
        }).addMatcher(authApi_1.authApi.endpoints.loginUser.matchFulfilled, (state, action) => {
            state.isAuthenticated = true;
            sessionStorage.setItem('accessToken', action.payload.accessToken);
        });
    }
});
exports.logoutUser = exports.authSlice.actions.logoutUser;
const selectAuthenticated = (state) => state.authState.isAuthenticated;
exports.selectAuthenticated = selectAuthenticated;
exports.default = exports.authSlice.reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aFNsaWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsd0RBQW9EO0FBSXBELE1BQU0sWUFBWSxHQUEyQjtJQUN6QyxJQUFJLEVBQUUsSUFBSTtJQUNWLGVBQWUsRUFBRSxLQUFLO0NBQ3ZCLENBQUE7QUFDVSxRQUFBLFNBQVMsR0FBRyxJQUFBLHFCQUFXLEVBQUM7SUFDbkMsSUFBSSxFQUFFLFdBQVc7SUFDakIsWUFBWTtJQUNaLFFBQVEsRUFBRTtRQUNSLFVBQVUsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3BCLEtBQUssQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFBO1FBQy9CLENBQUM7S0FDRjtJQUNELGFBQWEsRUFBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3hCLE9BQU8sQ0FBQyxVQUFVLENBQUMsaUJBQU8sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBQyxDQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsRUFBRTtZQUMvRSxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtZQUM1QixjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVksQ0FBQyxDQUFBO1FBQ3BFLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFDLENBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxFQUFFO1lBQ3ZFLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO1lBQzVCLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBWSxDQUFDLENBQUE7UUFDbkUsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0NBQ0YsQ0FBQyxDQUFBO0FBRWEsa0JBQVUsR0FBSyxpQkFBUyxDQUFDLE9BQU8sWUFBQTtBQUd4QyxNQUFNLG1CQUFtQixHQUFHLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUE7QUFBM0UsUUFBQSxtQkFBbUIsdUJBQXdEO0FBRXhGLGtCQUFlLGlCQUFTLENBQUMsT0FBTyxDQUFBIn0=