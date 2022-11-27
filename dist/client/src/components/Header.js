"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const hooks_1 = require("../app/hooks");
const authSlice_1 = require("../features/auth/authSlice");
const react_router_dom_1 = require("react-router-dom");
const Header = (props) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleLogOut = (event) => {
        dispatch(authSlice_1.logoutUser);
    };
    return (<div style={props.style}>
      <div>
        <a onClick={(e) => navigate('/home')} style={{
            fontSize: '5rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontFamily: 'IBM Plex Sans, sans-serif',
            color: "#1D1A31",
            cursor: "pointer"
        }}>
          {props.title.toUpperCase()}
        </a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a style={{
            display: 'inline', cursor: 'pointer', fontSize: '1rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontFamily: 'IBM Plex Sans, sans-serif',
            color: "#1D1A31"
        }} onClick={(e) => navigate('/saved')}>Saved&nbsp; &nbsp;</a>

        <button style={{
            display: 'inline', cursor: 'pointer', fontSize: '1rem',
            fontWeight: 'bold',
            textDecoration: 'none',
            fontFamily: 'IBM Plex Sans, sans-serif',
            color: "#1D1A31"
        }} onClick={(e) => handleLogOut(e)}>LogOut&nbsp; &nbsp;</button>

      </div>
    </div>);
};
exports.default = Header;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBd0M7QUFFeEMsd0NBQTZEO0FBQzdELDBEQUE0RTtBQUM1RSx1REFBOEM7QUFFOUMsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFrQixFQUFFLEVBQUU7SUFDcEMsTUFBTSxRQUFRLEdBQUcsSUFBQSw4QkFBVyxHQUFFLENBQUE7SUFDOUIsTUFBTSxRQUFRLEdBQUcsSUFBQSxzQkFBYyxHQUFFLENBQUE7SUFDakMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxLQUF5QyxFQUFDLEVBQUU7UUFDOUQsUUFBUSxDQUFDLHNCQUFVLENBQUMsQ0FBQTtJQUN4QixDQUFDLENBQUE7SUFFRCxPQUFPLENBQ0wsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUN0QjtNQUFBLENBQUMsR0FBRyxDQUNGO1FBQUEsQ0FBQyxDQUFDLENBQ0EsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFBLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUNoQyxLQUFLLENBQUMsQ0FBQztZQUNMLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxNQUFNO1lBQ2xCLGNBQWMsRUFBRSxNQUFNO1lBQ3RCLFVBQVUsRUFBRSwyQkFBMkI7WUFDdkMsS0FBSyxFQUFDLFNBQVM7WUFDZixNQUFNLEVBQUMsU0FBUztTQUNqQixDQUFDLENBQ0Y7VUFBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQzVCO1FBQUEsRUFBRSxDQUFDLENBQ0w7TUFBQSxFQUFFLEdBQUcsQ0FDTDtNQUFBLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxjQUFjLEVBQUMsZUFBZSxFQUFFLFVBQVUsRUFBQyxRQUFRLEVBQUUsQ0FBQyxDQUNoRjtRQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ1IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNO1lBQ3RELFVBQVUsRUFBRSxNQUFNO1lBQ2xCLGNBQWMsRUFBRSxNQUFNO1lBQ3RCLFVBQVUsRUFBRSwyQkFBMkI7WUFDdkMsS0FBSyxFQUFFLFNBQVM7U0FBRSxDQUFDLENBQ25CLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBRTNEOztRQUFBLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2IsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNO1lBQ3RELFVBQVUsRUFBRSxNQUFNO1lBQ2xCLGNBQWMsRUFBRSxNQUFNO1lBQ3RCLFVBQVUsRUFBRSwyQkFBMkI7WUFDdkMsS0FBSyxFQUFFLFNBQVM7U0FDZixDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FFbkU7O01BQUEsRUFBRSxHQUFHLENBQ1A7SUFBQSxFQUFFLEdBQUcsQ0FBQyxDQUVQLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCxrQkFBZSxNQUFNLENBQUEifQ==