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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
const user_Api_1 = require("../app/services/user.Api");
const hooks_1 = require("../app/hooks");
const authSlice_1 = require("../features/auth/authSlice");
const ListItemComponent = (props) => {
    const { data } = props;
    const [saveCity] = (0, user_Api_1.useSaveCityMutation)();
    const [saved, setSaved] = (0, react_1.useState)(false);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleSave = (event) => {
        if (!props.saved) {
            try {
                saveCity(data).unwrap();
                setSaved(true);
            }
            catch (error) {
                if (error.statusCode && (error.statusCode == 401 || error.statusCode == 403)) {
                    dispatch(authSlice_1.logoutUser);
                }
            }
        }
    };
    return (<div className="card card-1" style={{ display: "flex", justifyContent: "flex-start" }}>
          <div className='mb-2' style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <div className="card__icon">
              <react_fontawesome_1.FontAwesomeIcon icon={(0, import_macro_1.solid)('tree-city')}/>
            </div>
        <a onClick={(e) => handleSave(e)} className="card__exit card__link"><react_fontawesome_1.FontAwesomeIcon icon={(0, import_macro_1.solid)('bookmark')} style={saved ? { color: "#1D1A31" } : {}}/></a>
          </div>
          
          <h5 className="card__title">City: &nbsp;{data.city}</h5>
          <h5 className="card__title">Region: &nbsp;{data.region}</h5>
          <h5 className="card__title">Country: &nbsp;{data.country}</h5>
          <h5 className="card__title">Coordinates: &nbsp;{data.latitude},&nbsp;{data.longitude}</h5>
        </div>);
};
exports.default = ListItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdEl0ZW1Db21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTGlzdEl0ZW1Db21wb25lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBdUM7QUFDdkMsc0VBQWdFO0FBQ2hFLGlGQUFzRTtBQUV0RSx1REFBOEQ7QUFDOUQsd0NBQTZDO0FBQzdDLDBEQUF1RDtBQUV2RCxNQUFNLGlCQUFpQixHQUFHLENBQUMsS0FBaUMsRUFBRSxFQUFFO0lBQzlELE1BQU0sRUFBQyxJQUFJLEVBQUMsR0FBRSxLQUFLLENBQUE7SUFDbkIsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLElBQUEsOEJBQW1CLEdBQUUsQ0FBQTtJQUN4QyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxHQUFHLElBQUEsZ0JBQVEsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUN6QyxNQUFNLFFBQVEsR0FBRyxJQUFBLHNCQUFjLEdBQUUsQ0FBQTtJQUVqQyxNQUFNLFVBQVUsR0FBRyxDQUFDLEtBQVMsRUFBQyxFQUFFO1FBQzlCLElBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDO1lBQ2QsSUFBSTtnQkFDRixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUE7Z0JBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTthQUNmO1lBQUMsT0FBTyxLQUFVLEVBQUU7Z0JBQ25CLElBQUksS0FBSyxDQUFDLFVBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLEVBQUU7b0JBQzVFLFFBQVEsQ0FBQyxzQkFBVSxDQUFDLENBQUE7aUJBQ3JCO2FBQ0Y7U0FDRjtJQUVILENBQUMsQ0FBQTtJQUVELE9BQU8sQ0FDRCxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUMsWUFBWSxFQUFDLENBQUMsQ0FDaEY7VUFBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzNCLE9BQU8sRUFBQyxNQUFNO1lBQ2QsY0FBYyxFQUFDLGVBQWU7U0FDL0IsQ0FBQyxDQUNBO1lBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FDekI7Y0FBQSxDQUFDLG1DQUFlLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBQSxvQkFBSyxFQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQzVDO1lBQUEsRUFBRSxHQUFHLENBQ1Q7UUFBQSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUMsbUNBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFBLG9CQUFLLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUMsRUFBRyxFQUFFLENBQUMsQ0FDMUo7VUFBQSxFQUFFLEdBQUcsQ0FFTDs7VUFBQSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUN2RDtVQUFBLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLENBQzNEO1VBQUEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FDN0Q7VUFBQSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxFQUFFLENBQzNGO1FBQUEsRUFBRSxHQUFHLENBQUMsQ0FDWCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsaUJBQWlCLENBQUEifQ==