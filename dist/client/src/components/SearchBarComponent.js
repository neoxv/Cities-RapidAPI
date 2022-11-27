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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const import_macro_1 = require("@fortawesome/fontawesome-svg-core/import.macro");
const home_model_1 = require("../features/home/home.model");
const InputComponent_1 = __importDefault(require("./InputComponent"));
const hooks_1 = require("../app/hooks");
const homeSlice_1 = require("../features/home/homeSlice");
const SearchBarComponent = (props) => {
    const [searchQuery, setSearchQuery] = (0, react_1.useState)(home_model_1.SearchQueryInitialState);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleInput = (event) => {
        const { name, value } = event.currentTarget;
        setSearchQuery(Object.assign(Object.assign({}, searchQuery), { [name]: value }));
    };
    const HandleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        dispatch((0, homeSlice_1.setQuery)(searchQuery));
    });
    return (<div className="wrap">
          <div className="search" style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="form-group mt-3">
                  <label>City Prefix</label>
                  <InputComponent_1.default type='text' placeholder='City Prefix' handler={handleInput} value={searchQuery.namePrefix} name="namePrefix"/>
              </div>
              <div className="form-group mt-3">
                  <label>Min Population</label>
                  <InputComponent_1.default type='number' handler={handleInput} value={searchQuery.minPopulation} name="minPopulation"/>
              </div>
              <div className="form-group mt-3">
                  <label>Max Population</label>
                  <InputComponent_1.default type='number' handler={handleInput} value={searchQuery.maxPopulation} name="maxPopulation"/>
              </div>
              <div className="form-group mt-3">
                  <label>Limit</label>
                  <InputComponent_1.default max={10} type='number' handler={handleInput} value={searchQuery.limit} name="limit"/>
              </div>
              <div style={{ alignSelf: "end" }}>
                  <button type="submit" className="searchButton" onClick={(e) => HandleSubmit(e)}>
                      <react_fontawesome_1.FontAwesomeIcon icon={(0, import_macro_1.solid)('magnifying-glass')}/> Find City
                  </button>
              </div>
          </div>
      </div>);
};
exports.default = SearchBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmFyQ29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9jb21wb25lbnRzL1NlYXJjaEJhckNvbXBvbmVudC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUF1QztBQUN2QyxzRUFBZ0U7QUFDaEUsaUZBQXFFO0FBQ3JFLDREQUFtRjtBQUNuRixzRUFBNkM7QUFDN0Msd0NBQTZDO0FBQzdDLDBEQUFxRDtBQUVyRCxNQUFNLGtCQUFrQixHQUFHLENBQUMsS0FBUyxFQUFFLEVBQUU7SUFDckMsTUFBTSxDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQWUsb0NBQXVCLENBQUMsQ0FBQTtJQUNyRixNQUFNLFFBQVEsR0FBRyxJQUFBLHNCQUFjLEdBQUUsQ0FBQTtJQUdqQyxNQUFNLFdBQVcsR0FBRyxDQUFDLEtBQXdDLEVBQUUsRUFBRTtRQUM3RCxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUE7UUFDM0MsY0FBYyxpQ0FBTSxXQUFXLEtBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLElBQUcsQ0FBQTtJQUNyRCxDQUFDLENBQUE7SUFFRCxNQUFNLFlBQVksR0FBRyxDQUFPLEtBQXlDLEVBQUUsRUFBRTtRQUNyRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDdEIsUUFBUSxDQUFDLElBQUEsb0JBQVEsRUFBQyxXQUFXLENBQUMsQ0FBQyxDQUFBO0lBQ25DLENBQUMsQ0FBQSxDQUFBO0lBR0gsT0FBTyxDQUNILENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQ2pCO1VBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUUsY0FBYyxFQUFDLGVBQWUsRUFBQyxDQUFDLENBQzVFO2NBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUM1QjtrQkFBQSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUN6QjtrQkFBQSxDQUFDLHdCQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUNoSTtjQUFBLEVBQUUsR0FBRyxDQUNMO2NBQUEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUM1QjtrQkFBQSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsS0FBSyxDQUM1QjtrQkFBQSxDQUFDLHdCQUFjLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFDL0c7Y0FBQSxFQUFFLEdBQUcsQ0FDTDtjQUFBLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FDNUI7a0JBQUEsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEtBQUssQ0FDNUI7a0JBQUEsQ0FBQyx3QkFBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUUsT0FBTyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQy9HO2NBQUEsRUFBRSxHQUFHLENBQ0w7Y0FBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQzVCO2tCQUFBLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQ25CO2tCQUFBLENBQUMsd0JBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUN2RztjQUFBLEVBQUUsR0FBRyxDQUNMO2NBQUEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxTQUFTLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FDMUI7a0JBQUEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDM0U7c0JBQUEsQ0FBQyxtQ0FBZSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUEsb0JBQUssRUFBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUk7a0JBQ3pELEVBQUUsTUFBTSxDQUNaO2NBQUEsRUFBRSxHQUFHLENBQ1Q7VUFBQSxFQUFFLEdBQUcsQ0FDVDtNQUFBLEVBQUUsR0FBRyxDQUFDLENBQ1QsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVELGtCQUFlLGtCQUFrQixDQUFBIn0=