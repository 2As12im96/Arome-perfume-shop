import React, { useEffect, useState } from 'react';
import Footer from '../../footer/footer';
import NavbarOffcanvase from '../../Navbar/Navbar';
import { RegisterContainer } from '../Auth.style';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import googleLogic from '../google.logic';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/authSlice';
import { toast } from 'react-toastify';

function Login() {
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
        dispatch(loginUser(data)); 
    };

    useEffect(() => {
       
        if (auth.status === 'succeeded') {
            toast.success('Login successful!', { position: 'bottom-left' }); 
            navigate('/', { replace: true });
        }
        
        else if (auth.status === 'failed') {
            toast.error(auth.error, {
                position: 'bottom-left',
            });
        }
    }, [auth.status, navigate, auth.error]);

    const [showPassword, setShowPassword] = useState(false);

    
    const { googlesignIn } = googleLogic();

    return (
        <>
            <NavbarOffcanvase />
            <RegisterContainer>
                <div className="container pt-5">
                    <div className="row justify-content-sm-center pt-5">
                        <div className="col-lg-8 col-sm-12 shadow round pb-3">
                            <h1 className="text-center pt-3 text-secondary">Sign in</h1>
                            <p className='text text-center'>Stay updated on your professional world</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
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
                                        <small className="text-danger mt-2">{errors.email.message}</small>
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
                                <Link to='/' className='forgot d-block mt-3'>Forgot password?</Link>
                                <input
                                    type="submit"
                                    className="submit d-flex justify-content-center align-items-center w-100 my-3"
                                    value={auth.loading === 'pending' ? 'Signing in...' : 'Sign in'}
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
                            <p className='change-page text-center'>Create Account? <a href="/Register">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </RegisterContainer>
            <Footer />
        </>
    );
}

export default Login;