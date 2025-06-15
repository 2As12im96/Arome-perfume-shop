import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import NavbarOffcanvase from '../../Navbar/Navbar';
import Footer from '../../footer/footer';
import { RegisterContainer } from '../Auth.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import googleLogic from '../google.logic';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../redux/authSlice';

function Register() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        
        dispatch(registerUser(data));
    };

    useEffect(() => {
        // Navigate and show toast only upon successful registration
        if (auth.status === 'succeeded') {
            toast.success('Sign up successful!', { position: 'bottom-left' });
            navigate('/', { replace: true });
        }
        // Show error toast if registration failed
        else if (auth.status === 'failed') {
            toast.error(auth.error, {
                position: 'bottom-left',
            });
        }
    }, [auth.status, navigate, auth.error]);

    const [showPassword, setShowPassword] = useState(false);

    // Sign in with Google account logic
    const { googlesignIn } = googleLogic();

    return (
        <>
            <NavbarOffcanvase />
            <RegisterContainer>
                <div className="container pt-5">
                    <div className="row justify-content-sm-center pt-5">
                        <div className="col-lg-8 col-sm-12 shadow round pb-3">
                            <h1 className="text-center pt-3 text-secondary">Create Account</h1>
                            <p className='text text-center'>Create your account. It's free and only takes a minute.</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="names-box d-flex justify-content-between align-items-center">
                                    <div className="form-group w-50">
                                        <label htmlFor='FirstName' className="col-form-label">First Name:</label>
                                        <input
                                            type="text"
                                            id='FirstName'
                                            placeholder='First Name'
                                            className={`form-control ${errors.FirstName && "invalid"}`}
                                            {...register("FirstName", { required: "Please enter your first name" })}
                                            onBlur={() => trigger("FirstName")}
                                        />
                                        {errors.FirstName && (
                                            <small className="text-danger">{errors.FirstName.message}</small>
                                        )}
                                    </div>
                                    <div className="form-group m-2 w-50">
                                        <label htmlFor='LastName' className="col-form-label">Last Name:</label>
                                        <input
                                            type="text"
                                            id='LastName'
                                            placeholder='Last Name'
                                            className={`form-control ${errors.LastName && "invalid"}`}
                                            {...register("LastName", { required: "Please enter your last name" })}
                                            onBlur={() => trigger("LastName")}
                                        />
                                        {errors.LastName && (
                                            <small className="text-danger">{errors.LastName.message}</small>
                                        )}
                                    </div>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor='name' className="col-form-label">User Name:</label>
                                    <input
                                        type="text"
                                        id='name'
                                        placeholder='User Name'
                                        className={`form-control ${errors.name && "invalid"}`}
                                        {...register("name", { required: "Please enter user name" })}
                                        onBlur={() => trigger("name")}
                                    />
                                    {errors.name && (
                                        <small className="text-danger">{errors.name.message}</small>
                                    )}
                                </div>
                                <div className="form-group mt-2">
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
                                        <small className="text-danger">{errors.email.message}</small>
                                    )}
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor='Password' className="col-form-label">Password:</label>
                                    <span className='d-block position-relative'>
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
                                        {errors.password && (
                                            <small className="d-block text-danger mt-2">{errors.password.message}</small>
                                        )}
                                    </span>
                                </div>
                                <div className="form-group d-flex">
                                    <input
                                        type="checkbox"
                                        id='checkbox'
                                        className={`${errors.checkbox && "invalid"}`}
                                        {...register("checkbox", { required: "Please accept the terms and conditions" })}
                                        onBlur={() => trigger("checkbox")}
                                    />
                                    <label htmlFor='checkbox' className="links col-form-label m-3">I accept the <a href="/terms-conditions">terms and conditions</a> & <a href="/terms-conditions">Privacy Policy</a></label>
                                    {errors.checkbox && (
                                        <small className="text-danger">{errors.checkbox.message}</small>
                                    )}
                                </div>
                                <input
                                    type="submit"
                                    className="submit d-flex justify-content-center align-items-center w-100 my-3"
                                    value={auth.loading === 'pending' ? 'Creating...' : 'Create'} 
                                    disabled={auth.loading === 'pending'} 
                                />
                            </form>
                            <span className='d-flex justify-content-center align-items-center mt-3 space'>or</span>
                            <button
                                className='d-flex justify-content-center align-items-center googleBtn'
                                onClick={googlesignIn}
                                disabled={auth.loading === 'pending'} 
                            >
                                <img src="/images/google.png" alt="Sign in with Google" />
                            </button>
                            <p className='change-page text-center'>Already have an account? <a href="/Login">Sign in</a></p>
                        </div>
                    </div>
                </div>
            </RegisterContainer>
            <Footer />
        </>
    );
}

export default Register;