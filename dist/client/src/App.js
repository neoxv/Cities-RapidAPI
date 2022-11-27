"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
const react_router_dom_1 = require("react-router-dom");
const AuthPage_1 = __importDefault(require("./features/auth/AuthPage"));
const Home_1 = __importDefault(require("./features/home/Home"));
const Saved_1 = __importDefault(require("./features/home/Saved"));
function App() {
    return (<react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Routes>
          <react_router_dom_1.Route path='/' element={<AuthPage_1.default />}/>
          <react_router_dom_1.Route path='/home' element={<Home_1.default />}/>
          <react_router_dom_1.Route path='/saved' element={<Saved_1.default />}/>
        </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vY2xpZW50L3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQTBCO0FBQzFCLGdEQUE4QztBQUM5Qyx1REFBK0U7QUFDL0Usd0VBQWdEO0FBQ2hELGdFQUF3QztBQUN4QyxrRUFBMEM7QUFFMUMsU0FBUyxHQUFHO0lBQ1YsT0FBTyxDQUNMLENBQUMsZ0NBQU0sQ0FDSDtRQUFBLENBQUMseUJBQU0sQ0FDTDtVQUFBLENBQUMsd0JBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsa0JBQVEsQ0FBQyxBQUFELEVBQUcsQ0FBQyxFQUN0QztVQUFBLENBQUMsd0JBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsY0FBSSxDQUFDLEFBQUQsRUFBRyxDQUFDLEVBQ3RDO1VBQUEsQ0FBQyx3QkFBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxlQUFLLENBQUMsQUFBRCxFQUFHLENBQUMsRUFDMUM7UUFBQSxFQUFFLHlCQUFNLENBQ1o7SUFBQSxFQUFFLGdDQUFNLENBQUMsQ0FDVixDQUFDO0FBQ0osQ0FBQztBQUVELGtCQUFlLEdBQUcsQ0FBQyJ9