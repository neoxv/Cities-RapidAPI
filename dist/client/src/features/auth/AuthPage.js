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
const common_model_1 = require("../common/common.model");
require("./auth.css");
const auth_model_1 = require("./auth.model");
const authApi_1 = require("../../app/services/authApi");
const InputComponent_1 = __importDefault(require("../../components/InputComponent"));
const hooks_1 = require("../../app/hooks");
const authSlice_1 = require("./authSlice");
const react_router_dom_1 = require("react-router-dom");
const FormComponent_1 = __importDefault(require("../../components/FormComponent"));
const AuthPage = () => {
    const [formDetail, setFormDetail] = (0, react_1.useState)({
        title: "Sign In",
        subtitle: "Not registered yet?",
        option: "Sign Up",
        signIn: true
    });
    const [user, setUser] = (0, react_1.useState)(auth_model_1.UserStateInitial);
    const [inputInputError, setInputError] = (0, react_1.useState)(common_model_1.ErrorInitialState);
    const [registerUser] = (0, authApi_1.useRegisterUserMutation)();
    const [loginUser] = (0, authApi_1.useLoginUserMutation)();
    const isAuthenticated = (0, hooks_1.useAppSelector)(authSlice_1.selectAuthenticated);
    const navigate = (0, react_router_dom_1.useNavigate)();
    (0, react_1.useEffect)(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
        else {
            navigate('/');
        }
    }, [isAuthenticated]);
    const changeAuthMode = () => {
        setFormDetail(formDetail.signIn ? {
            title: "Sign Up",
            subtitle: "Already Registered?",
            option: "Sign In",
            signIn: false
        } : {
            title: "Sign In",
            subtitle: "Not registered yet?",
            option: "Sign Up",
            signIn: true
        });
    };
    const handleSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        if (user.email === "" || user.password === "" || (!formDetail.signIn && user.username === "")) {
            setInputError({ message: "Please enter a valid input!", status: true });
        }
        if (user.password.length < 6) {
            setInputError({ message: "Password must be more than 6 characters", status: true });
        }
        if (emailValidator(user.email)) {
            if (formDetail.signIn) {
                yield loginUser({ email: user.email, password: user.password })
                    .unwrap()
                    .catch((error) => {
                    setInputError({ status: true, message: error.data.errors[0].msg });
                });
            }
            else {
                yield registerUser(user)
                    .unwrap()
                    .catch((error) => {
                    setInputError({ status: true, message: error.data.errors[0].msg });
                });
            }
        }
    });
    const emailValidator = (email) => {
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (regex.test(email) === false) {
            return false;
        }
        return true;
    };
    const handleInput = (event) => {
        const { name, value } = event.currentTarget;
        setUser(Object.assign(Object.assign({}, user), { [name]: value }));
        setInputError(common_model_1.ErrorInitialState);
    };
    return (<FormComponent_1.default>
            <h3 className="Auth-form-title">{formDetail.title}</h3>
            <div className="text-center">
                {formDetail.subtitle}{" "}
                <span className="link-primary" onClick={changeAuthMode}>
                    {formDetail.option}
                </span>
                {inputInputError.status ? <p style={{ color: "red" }}>{inputInputError.message}</p> : null}
            </div>
            {!formDetail.signIn ? (<div className="form-group mt-3">
                    <label>Username</label>
                    <InputComponent_1.default type='text' placeholder='Username' handler={handleInput} value={user.username} name="username"/>
                </div>) : null}

            <div className="form-group mt-3">
                <label>Email address</label>
                <InputComponent_1.default type='email' placeholder='Email' handler={handleInput} value={user.email} name="email"/>
            </div>
            <div className="form-group mt-3">
                <label>Password</label>
                <InputComponent_1.default type='password' placeholder='Password' handler={handleInput} value={user.password} name="password"/>
            </div>
            <div className="d-grid gap-2 mt-3 mb-3">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </FormComponent_1.default>);
};
exports.default = AuthPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXV0aFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9jbGllbnQvc3JjL2ZlYXR1cmVzL2F1dGgvQXV0aFBhZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQ0FBa0Q7QUFDbEQseURBQWtFO0FBQ2xFLHNCQUFtQjtBQUNuQiw2Q0FBbUU7QUFDbkUsd0RBQTBGO0FBQzFGLHFGQUE0RDtBQUM1RCwyQ0FBaUQ7QUFDakQsMkNBQWtEO0FBQ2xELHVEQUE4QztBQUM5QyxtRkFBMEQ7QUFFMUQsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO0lBQ2xCLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFDO1FBQ3pDLEtBQUssRUFBQyxTQUFTO1FBQ2YsUUFBUSxFQUFDLHFCQUFxQjtRQUM5QixNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsSUFBSTtLQUNmLENBQUMsQ0FBQTtJQUNGLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEdBQUcsSUFBQSxnQkFBUSxFQUFRLDZCQUFnQixDQUFDLENBQUE7SUFDekQsTUFBTSxDQUFDLGVBQWUsRUFBRSxhQUFhLENBQUMsR0FBRyxJQUFBLGdCQUFRLEVBQVMsZ0NBQWlCLENBQUMsQ0FBQTtJQUM1RSxNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsSUFBQSxpQ0FBdUIsR0FBRSxDQUFBO0lBQ2hELE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFBLDhCQUFvQixHQUFFLENBQUE7SUFDMUMsTUFBTSxlQUFlLEdBQUcsSUFBQSxzQkFBYyxFQUFDLCtCQUFtQixDQUFDLENBQUE7SUFDM0QsTUFBTSxRQUFRLEdBQUcsSUFBQSw4QkFBVyxHQUFFLENBQUE7SUFFL0IsSUFBQSxpQkFBUyxFQUFDLEdBQUcsRUFBRTtRQUNkLElBQUcsZUFBZSxFQUFDO1lBQ2Qs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