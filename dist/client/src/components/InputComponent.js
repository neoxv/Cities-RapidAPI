"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputComponent = (props) => {
    return (<input type={props.type} className="form-control mt-1" placeholder={props.placeholder} name={props.name} onChange={(e) => props.handler(e)} value={props.value} min={props.min} max={props.max}/>);
};
exports.default = InputComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5wdXRDb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvSW5wdXRDb21wb25lbnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0RBQXlCO0FBR3pCLE1BQU0sY0FBYyxHQUFHLENBQUMsS0FBaUIsRUFBRSxFQUFFO0lBQzNDLE9BQU8sQ0FDSCxDQUFDLEtBQUssQ0FDRixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQ2pCLFNBQVMsQ0FBQyxtQkFBbUIsQ0FDN0IsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUMvQixJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQ2pCLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2hDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FDbkIsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUNmLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFDakIsQ0FDTCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsY0FBYyxDQUFBIn0=