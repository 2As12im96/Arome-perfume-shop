import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthContainer } from "./Auth.style";
import { loginAdminUser } from "../../../redux/adminAuth";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function LoginAdmin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.AdminAuth); 

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = useForm();

    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (auth.status === 'success' && auth.adminUserName) {
            navigate('/Overview', { replace: true });
        }
    }, [auth.adminUserName, auth.status, navigate, auth.error]);

    const onSubmit = (data) => {
        dispatch(loginAdminUser({ email: data.email, password: data.password }));
    };

    return (
        <AuthContainer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="admin-img d-flex justify-content-center align-items-center w-100 h-100">
                            <img src="images/logo.avif" className='img-fluid' alt="Logo" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="admin-form">
                            <h1>Welcome</h1>
                            <p>Please login to manage the application.</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group text-start">
                                    <label htmlFor='Email' className="col-form-label">Email:</label>
                                    <input
                                        type="text"
                                        id='Email'
                                        placeholder='Enter your email'
                                        className={`form-control ${errors.email && "invalid"}`}
                                        {...register("email", {
                                            required: "Please enter a valid email address",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "Invalid email address. Please enter your email address in format: yourname@example.com",
                                            }
                                        })}
                                        onBlur={() => trigger("email")} 
                                    />
                                    {errors.email && (
                                        <small className="text-danger msg-err">{errors.email.message}</small>
                                    )}
                                </div>
                                <div className="form-group text-start">
                                    <label htmlFor='Password' className="col-form-label">Password:</label>
                                    <span className='d-flex position-relative'>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            id='Password'
                                            placeholder='Password'
                                            className={`form-control ${errors.password && "invalid"}`}
                                            {...register("password",
                                                {
                                                    required: "Password is Required",
                                                    minLength: { 
                                                        value: 8,
                                                        message: "Password must be at least 8 characters",
                                                    },
                                                }
                                            )}
                                            onBlur={() => trigger("password")} 
                                        />
                                        <span className='aye position-absolute'>
                                            {showPassword ? <FontAwesomeIcon icon={faEyeSlash} onClick={() => setShowPassword(false)} /> : <FontAwesomeIcon icon={faEye} onClick={() => setShowPassword(true)} />}
                                        </span>
                                    </span>
                                    {errors.password && (
                                        <small className="d-block text-danger msg-err">{errors.password.message}</small>
                                    )}
                                </div>
                                {auth.loading === 'pending' ?
                                    (<>
                                        <span className='d-flex justify-content-center align-items-center rounded btn btn-primary submit'>
                                            <span className='loader'></span> 
                                        </span>
                                    </>) :
                                    (<>
                                        <input
                                            type="submit"
                                            className="btn btn-primary submit mt-3 w-100"
                                            value="Login"
                                            disabled={auth.loading === 'pending'}
                                        />
                                    </>)
                                }
                            </form>
                            <Link to='/Admin-register'>sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
}

export default LoginAdmin;