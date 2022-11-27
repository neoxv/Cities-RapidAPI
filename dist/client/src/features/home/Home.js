"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const hooks_1 = require("../../app/hooks");
const Header_1 = __importDefault(require("../../components/Header"));
const ListItemComponent_1 = __importDefault(require("../../components/ListItemComponent"));
const ListComponent_1 = __importDefault(require("../../components/ListComponent"));
const SearchBarComponent_1 = __importDefault(require("../../components/SearchBarComponent"));
require("./home.css");
const homeSlice_1 = require("./homeSlice");
const citiesApi_1 = require("../../app/services/citiesApi");
const authSlice_1 = require("../auth/authSlice");
const react_router_dom_1 = require("react-router-dom");
const Home = () => {
    let query = (0, hooks_1.useAppSelector)(homeSlice_1.selectQuery);
    const { data, isLoading, isError } = (0, citiesApi_1.useSearchCitiesQuery)(query);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (sessionStorage.getItem('accessToken') === undefined || sessionStorage.getItem('accessToken') === null) {
            dispatch(authSlice_1.logoutUser);
            navigate('/');
        }
    }, []);
    return (<>
      <Header_1.default title='Cities.' style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around"
        }}/>
      <SearchBarComponent_1.default subtitle='What city are you looking for?'/>
      {isLoading ? (<h5 style={{ textAlign: "center" }}>Loading Cities ... </h5>) : null}
      {isError ? (<h5 style={{ textAlign: "center", color: 'red' }}>Error Loading Cities! </h5>) : null}
      <ListComponent_1.default>
        {data === null || data === void 0 ? void 0 : data.data.map((city) => {
            return <ListItemComponent_1.default data={city} key={city.id} saved={false}/>;
        })}
      </ListComponent_1.default>
    </>);
};
exports.default = Home;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2NsaWVudC9zcmMvZmVhdHVyZXMvaG9tZS9Ib21lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQXdDO0FBQ3hDLDJDQUFnRTtBQUNoRSxxRUFBNEM7QUFDNUMsMkZBQWtFO0FBQ2xFLG1GQUEwRDtBQUMxRCw2RkFBb0U7QUFDcEUsc0JBQW1CO0FBRW5CLDJDQUF5QztBQUN6Qyw0REFBbUU7QUFDbkUsaURBQW1FO0FBQ25FLHVEQUE4QztBQUU5QyxNQUFNLElBQUksR0FBRyxHQUFHLEVBQUU7SUFDaEIsSUFBSSxLQUFLLEdBQUcsSUFBQSxzQkFBYyxFQUFDLHVCQUFXLENBQUMsQ0FBQTtJQUN2QyxNQUFNLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUMsR0FBQyxJQUFBLGdDQUFvQixFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzNELE1BQU0sUUFBUSxHQUFHLElBQUEsc0JBQWMsR0FBRSxDQUFBO0lBQ2pDLE1BQU0sUUFBUSxHQUFHLElBQUEsOEJBQVcsR0FBRSxDQUFBO0lBRTlCLElBQUEsaUJBQVMsRUFBQyxHQUFHLEVBQUU7UUFDYixJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssU0FBUyxJQUFJLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ3pHLFFBQVEsQ0FBQyxzQkFBVSxDQUFDLENBQUE7WUFDcEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ2Q7SUFDSCxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFHTixPQUFPLENBQ0wsRUFDRTtNQUFBLENBQUMsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzdCLE9BQU8sRUFBQyxNQUFNO1lBQ2QsVUFBVSxFQUFDLFFBQVE7WUFDbkIsY0FBYyxFQUFDLGNBQWM7U0FDOUIsQ0FBQyxFQUNGO01BQUEsQ0FBQyw0QkFBa0IsQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLEVBQzdEO01BQUEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ2xGO01BQUEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDL0Y7TUFBQSxDQUFDLHVCQUFhLENBQ1o7UUFBQSxDQUFDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBVSxFQUFDLEVBQUU7WUFDekIsT0FBTyxDQUFDLDJCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRyxDQUFBO1FBQ3ZFLENBQUMsQ0FBQyxDQUVOO01BQUEsRUFBRSx1QkFBYSxDQUNqQjtJQUFBLEdBQUcsQ0FFSixDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsSUFBSSxDQUFBIn0=