"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const FormComponent = (props) => {
    return (<div className="Auth-form-container">
          <form className="Auth-form">
              <div className="Auth-form-content">
                  {props.children}
              </div>
          </form>
      </div>);
};
exports.default = FormComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9zcmMvY29tcG9uZW50cy9Gb3JtQ29tcG9uZW50LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtEQUF5QjtBQUV6QixNQUFNLGFBQWEsR0FBRyxDQUFDLEtBQVMsRUFBRSxFQUFFO0lBQ2xDLE9BQU8sQ0FDSCxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQ2hDO1VBQUEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FDdkI7Y0FBQSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQzlCO2tCQUFBLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDbkI7Y0FBQSxFQUFFLEdBQUcsQ0FDVDtVQUFBLEVBQUUsSUFBSSxDQUNWO01BQUEsRUFBRSxHQUFHLENBQUMsQ0FDVCxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsYUFBYSxDQUFBIn0=