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
require("./home.css");
const user_Api_1 = require("../../app/services/user.Api");
const authSlice_1 = require("../auth/authSlice");
const react_router_dom_1 = require("react-router-dom");
const Saved = () => {
    const { data, isLoading, isError } = (0, user_Api_1.useSavedCitiesQuery)();
    console.log(data);
    const navigate = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, hooks_1.useAppDispatch)();
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
            {isLoading ? (<h5 style={{ textAlign: "center" }}>Loading Saved Cities ... </h5>) : null}
            {isError ? (<h5 style={{ textAlign: "center", color: 'red' }}>Error Loading Saved Cities! </h5>) : null}
            <ListComponent_1.default>
                {data === null || data === void 0 ? void 0 : data.map((city) => {
            return <ListItemComponent_1.default data={city} key={city.id} saved={true}/>;
        })}
            </ListComponent_1.default>
        </>);
};
exports.default = Saved;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2F2ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jbGllbnQvc3JjL2ZlYXR1cmVzL2hvbWUvU2F2ZWQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBd0M7QUFDeEMsMkNBQWdFO0FBQ2hFLHFFQUE0QztBQUM1QywyRkFBa0U7QUFDbEUsbUZBQTBEO0FBQzFELHNCQUFtQjtBQUVuQiwwREFBaUU7QUFDakUsaURBQThDO0FBQzlDLHVEQUE4QztBQUU5QyxNQUFNLEtBQUssR0FBRyxHQUFHLEVBQUU7SUFDZixNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFBLDhCQUFtQixHQUFFLENBQUE7SUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNqQixNQUFNLFFBQVEsR0FBRyxJQUFBLDhCQUFXLEdBQUUsQ0FBQTtJQUM5QixNQUFNLFFBQVEsR0FBRyxJQUFBLHNCQUFjLEdBQUUsQ0FBQTtJQUNqQyxJQUFBLGlCQUFTLEVBQUMsR0FBRyxFQUFFO1FBQ1gsSUFBRyxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLFNBQVMsSUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLElBQUksRUFBQztZQUNyRyxRQUFRLENBQUMsc0JBQVUsQ0FBQyxDQUFBO1lBQ3BCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQTtTQUNoQjtJQUNMLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUVOLE9BQU8sQ0FDSCxFQUNJO1lBQUEsQ0FBQyxnQkFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsT0FBTyxFQUFFLE1BQU07WUFDZixVQUFVLEVBQUUsUUFBUTtZQUNwQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUFDLEVBQ0Y7WUFBQSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLHlCQUF5QixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FDeEY7WUFBQSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsNEJBQTRCLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUN2RztZQUFBLENBQUMsdUJBQWEsQ0FDVjtnQkFBQSxDQUFDLElBQUksYUFBSixJQUFJLHVCQUFKLElBQUksQ0FBRSxHQUFHLENBQUMsQ0FBQyxJQUFXLEVBQUUsRUFBRTtZQUN2QixPQUFPLENBQUMsMkJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFFLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7UUFDdkUsQ0FBQyxDQUFDLENBRU47WUFBQSxFQUFFLHVCQUFhLENBQ25CO1FBQUEsR0FBRyxDQUVOLENBQUE7QUFDTCxDQUFDLENBQUE7QUFFRCxrQkFBZSxLQUFLLENBQUEifQ==