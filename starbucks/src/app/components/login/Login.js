import "./Login.scss";
import { useContext } from "react";
import LoginRegisterToggleContext from "@/app/context/login-register-toggle-context/LoginRegisterToggleContext";

const Login = () => {

    const {setLogin} = useContext(LoginRegisterToggleContext);

    const OnClickHandler = () => {
        setLogin(false);
    }

    return(
        <div>
            <h4 className="text-center text-green-800 fs-24px fw-500 mt-4">Welcome to Starbucks</h4>
            <form>
                <div className="mx-auto bg-white border p-4 shadow-sm rounded-3 mt-3 login-register-form-wrap" style={{width:'550px'}}>
                    <h4 className="text-center text-green-800 fs-20px fw-500 mb-4">Login</h4>
                    <div className="mb-3">
                        <label className="mb-1 fs-13px text-green-800">Username</label>
                        <input type="text" placeholder="Email ID or Phone Number" className="form-control bg-white fs-12px" required style={{height:'40px'}}/>
                    </div>
                    <div className="mb-4">
                        <label className="mb-1 fs-13px text-green-800">Password</label>
                        <input type="password" placeholder="Password" className="form-control bg-white fs-12px" required style={{height:'40px'}}/>
                    </div>
                    <div>
                        <button className="form-control bg-green-800 text-white fs-13px rounded-3 border-0" style={{height:'40px'}}>Login</button>
                    </div>
                    <p className="fs-12px text-green-800 mb-0 mt-3 fw-300">Dont have an account? <span className="fw-400 text-decoration-underline" onClick={OnClickHandler} role="button">Register</span></p>
                </div>
            </form>
        </div>
    )
}

export default Login;