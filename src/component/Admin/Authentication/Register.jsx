import React, { use, useEffect, useState } from 'react'
import { AuthContainer } from './Auth.style'
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerAdminUser } from '../../../redux/adminAuth';

function RegisterAdmin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.AdminAuth);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();
    const [user , setUser] = useState({
        FirstName:'',
        LastName:'',
        name:'',
        email:'',
        password:'',
    });
    const [btnDisabled , setBtnDisabled] = useState(false);
    const [icon, setIcon] = useState(false);
    
    const onSubmit = () => {
        setBtnDisabled(true);
        dispatch(registerAdminUser(user));
        reset();
        setTimeout(()=>{
        setBtnDisabled(false);
        },3000);
        console.log(user);
    };
    const adminUserNameData = localStorage.getItem('adminUserName'); 
    useEffect(()=> {
        if(auth.adminUserName){
            navigate('/Overview' , {replace:true});
        }else{
            navigate('/Admin-register' , {replace:true});
        }
    },[auth.adminUserName, navigate]);
    return (
        <AuthContainer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="admin-img d-flex justify-content-center align-items-center w-100 h-100">
                            <img src="images/logo.avif" className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="admin-form">
                            <h1>Welcome</h1>
                            <p>Please register to manage the application.</p>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="names-box d-flex justify-content-between align-items-center">
                                    <div className="form-group w-50 text-start">
                                    <label htmlFor='FirstName' className="col-form-label">First Name:</label>
                                    <input
                                        type="text"
                                        id='FirstName'
                                        placeholder='First Name'
                                        className={`form-control ${errors.FirstName && "invalid"}`}
                                        {...register("FirstName", { required: "please enter your first name" })}
                                        onKeyUp={(e) => {
                                        trigger("FirstName");
                                        setUser({...user , FirstName: e.target.value})
                                        }}
                                    />
                                    {errors.FirstName && (
                                        <small className="text-danger">{errors.FirstName.message}</small>
                                    )}
                                    </div>
                                    <div className="form-group ms-2 w-50 text-start">
                                    <label htmlFor='LastName' className="col-form-label">Last Name:</label>
                                    <input
                                        type="text"
                                        id='LastName'
                                        placeholder='Last Name'
                                        className={`form-control ${errors.LastName && "invalid"}`}
                                        {...register("LastName", { required: "please enter your last name" })}
                                        onKeyUp={(e) => {
                                        trigger("LastName");
                                        setUser({...user , LastName: e.target.value})
                                        }}
                                    />
                                    {errors.LastName && (
                                        <small className="text-danger">{errors.LastName.message}</small>
                                    )}
                                    </div>
                                </div>
                                <div className="form-group text-start">
                                    <label htmlFor='name' className="col-form-label">User Name:</label>
                                    <input
                                    type="text"
                                    id='name'
                                    placeholder='User Name'
                                    className={`form-control ${errors.name && "invalid"}`}
                                    {...register("name", { required: "please enter user name" })}
                                    onKeyUp={(e) => {
                                        trigger("name");
                                        setUser({...user , name: e.target.value})
                                    }}
                                    />
                                    {errors.name && (
                                    <small className="text-danger">{errors.name.message}</small>
                                    )}
                                </div>
                                <div className="form-group text-start">
                                    <label htmlFor='Email' className="col-form-label">Email:</label>
                                    <input
                                    type="text"
                                    id='Email'
                                    placeholder='Enter your email'
                                    className={`form-control ${errors.email && "invalid"}`}
                                    {...register("email", { required: "please enter a valid email address",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email addressplease enter your email address in format: yourname@example.com",
                                    }})}
                                    onKeyUp={(e) => {
                                        trigger("email");
                                        setUser({...user , email: e.target.value})
                                    }}
                                    />
                                    {errors.email && (
                                    <small className="text-danger">{errors.email.message}</small>
                                    )}
                                </div>
                                <div className="form-group text-start">
                                    <label htmlFor='Password' className="col-form-label">Password:</label>
                                    <span className='d-block position-relative'>
                                        <input
                                        type={icon ? "text" : "password"}
                                        id='Password'
                                        placeholder='Password'
                                        className={`form-control ${errors.password && "invalid"}`}
                                        {...register("password", 
                                            { required: "Password is Required", 
                                            min: {
                                                value: 8,
                                                message: "password must be at least 8 characters",
                                            },
                                            
                                            }
                    
                                        )}
                                        onKeyUp={(e) => {
                                            trigger("password");
                                            setUser({...user , password: e.target.value})
                                        }}
                                        />
                                        <span className='aye position-absolute'>
                                            {icon ? <FontAwesomeIcon icon={faEyeSlash} onClick={()=> setIcon(false)}/> : <FontAwesomeIcon icon={faEye} onClick={() => setIcon(true)} />}
                                        </span>
                                        {errors.password && (
                                        <small className="d-block text-danger mt-2">{errors.password.message}</small>
                                        )}
                                    </span>
                                </div>
                                {auth.loading ? 
                                    (<>
                                        <span className='d-flex justify-content-center align-items-center rounded btn btn-primary submit'>
                                            <span className='loader'></span>
                                        </span>
                                    </>):
                                    (<>
                                        <input type="submit" className="btn btn-primary submit mt-3 w-100" value="create" disabled={btnDisabled}/>
                                    </>)
                                }
                            </form>
                            <Link to='/Admin-auth'>sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    )
}

export default RegisterAdmin
