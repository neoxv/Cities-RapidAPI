"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectQuery = exports.setQuery = exports.homeSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const home_model_1 = require("./home.model");
const initialState = {
    cities: [],
    query: home_model_1.SearchQueryInitialState
};
exports.homeSlice = (0, toolkit_1.createSlice)({
    initialState,
    name: 'homeSlice',
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        }
    }
});
exports.setQuery = exports.homeSlice.actions.setQuery;
const selectQuery = (state) => state.homeState.query;
exports.selectQuery = selectQuery;
exports.default = exports.homeSlice.reducer;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZVNsaWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9mZWF0dXJlcy9ob21lL2hvbWVTbGljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEQ7QUFHOUQsNkNBQTRFO0FBTzVFLE1BQU0sWUFBWSxHQUFlO0lBQy9CLE1BQU0sRUFBQyxFQUFFO0lBQ1QsS0FBSyxFQUFDLG9DQUF1QjtDQUM5QixDQUFDO0FBRVcsUUFBQSxTQUFTLEdBQUcsSUFBQSxxQkFBVyxFQUFDO0lBQ25DLFlBQVk7SUFDWixJQUFJLEVBQUUsV0FBVztJQUNqQixRQUFRLEVBQUU7UUFDUixRQUFRLEVBQUMsQ0FBQyxLQUFLLEVBQUMsTUFBbUMsRUFBQyxFQUFFO1lBQ3BELEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQTtRQUM5QixDQUFDO0tBRUY7Q0FDRixDQUFDLENBQUM7QUFHWSxnQkFBUSxHQUFLLGlCQUFTLENBQUMsT0FBTyxVQUFDO0FBRXZDLE1BQU0sV0FBVyxHQUFHLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUE7QUFBekQsUUFBQSxXQUFXLGVBQThDO0FBR3RFLGtCQUFlLGlCQUFTLENBQUMsT0FBTyxDQUFBIn0=