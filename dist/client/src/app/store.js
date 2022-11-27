"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const api_1 = require("./services/api");
const authSlice_1 = __importDefault(require("../features/auth/authSlice"));
const homeSlice_1 = __importDefault(require("../features/home/homeSlice"));
const remoteApi_1 = require("./services/remoteApi");
exports.store = (0, toolkit_1.configureStore)({
    reducer: {
        authState: authSlice_1.default,
        homeState: homeSlice_1.default,
        [api_1.api.reducerPath]: api_1.api.reducer,
        [remoteApi_1.remoteApi.reducerPath]: remoteApi_1.remoteApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([api_1.api.middleware, remoteApi_1.remoteApi.middleware])
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL2FwcC9zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw4Q0FBd0U7QUFDeEUsd0NBQXFDO0FBQ3JDLDJFQUFxRDtBQUNyRCwyRUFBcUQ7QUFDckQsb0RBQWlEO0FBRXBDLFFBQUEsS0FBSyxHQUFHLElBQUEsd0JBQWMsRUFBQztJQUNsQyxPQUFPLEVBQUU7UUFDUCxTQUFTLEVBQUUsbUJBQVc7UUFDdEIsU0FBUyxFQUFFLG1CQUFXO1FBQ3RCLENBQUMsU0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFDLFNBQUcsQ0FBQyxPQUFPO1FBQzdCLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsRUFBRSxxQkFBUyxDQUFDLE9BQU87S0FDM0M7SUFDRCxVQUFVLEVBQUUsQ0FBQyxvQkFBb0IsRUFBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFHLENBQUMsVUFBVSxFQUFDLHFCQUFTLENBQUMsVUFBVSxDQUFDLENBQUM7Q0FDMUcsQ0FBQyxDQUFDIn0=