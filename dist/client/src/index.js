"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = require("react-dom/client");
const react_redux_1 = require("react-redux");
const store_1 = require("./app/store");
const App_1 = __importDefault(require("./App"));
const reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
const container = document.getElementById('root');
const root = (0, client_1.createRoot)(container);
root.render(<react_1.default.StrictMode>
    <react_redux_1.Provider store={store_1.store}>
        <App_1.default />
    </react_redux_1.Provider>
  </react_1.default.StrictMode>);
(0, reportWebVitals_1.default)();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9jbGllbnQvc3JjL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUEwQjtBQUMxQiw2Q0FBOEM7QUFDOUMsNkNBQXVDO0FBQ3ZDLHVDQUFvQztBQUNwQyxnREFBd0I7QUFDeEIsd0VBQWdEO0FBRWhELE1BQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFFLENBQUM7QUFDbkQsTUFBTSxJQUFJLEdBQUcsSUFBQSxtQkFBVSxFQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRW5DLElBQUksQ0FBQyxNQUFNLENBQ1QsQ0FBQyxlQUFLLENBQUMsVUFBVSxDQUNmO0lBQUEsQ0FBQyxzQkFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQUssQ0FBQyxDQUNuQjtRQUFBLENBQUMsYUFBRyxDQUFDLEFBQUQsRUFDUjtJQUFBLEVBQUUsc0JBQVEsQ0FDWjtFQUFBLEVBQUUsZUFBSyxDQUFDLFVBQVUsQ0FBQyxDQUNwQixDQUFDO0FBRUYsSUFBQSx5QkFBZSxHQUFFLENBQUMifQ==