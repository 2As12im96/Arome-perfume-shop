import React, { use, useEffect, useState } from 'react'
import { NavAdminContainer } from './Nav.style'
import { faBars, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logoutAdminUser } from '../../../redux/adminAuth';

function NavAdmin({isActive , setIsActive}) {
    const auth = useSelector((state) => state.AdminAuth);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [btn , setBtn] = useState(false);
    const handleClick = () => {
        setIsActive(!isActive);
    };
    useEffect(() => {
        if (isActive) {
        document.documentElement.classList.add('active');
        setBtn(true);
        } else {
        document.documentElement.classList.remove('active');
        setBtn(false);
        }
        return () => {
        document.documentElement.classList.remove('active');
        setBtn(false);
        };
    }, [isActive]);

    const adminUserName = localStorage.getItem('adminUserName');
    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUserName');
        dispatch(logoutAdminUser())
        toast.error('Logout Successfully' , {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const adminUserNameData = localStorage.getItem('adminUserName'); 
    useEffect(()=> {
        if(!adminUserNameData){
            navigate('/Admin-auth' , {replace:true});
        }
    },[adminUserNameData, navigate]);
  return (
    <NavAdminContainer>
        <div className="container">
            <div className="parent d-flex justify-content-between align-items-center">
                <div className="logo">
                    <img src="/images/logo.avif" alt="" />
                </div>
                <ul className="links d-flex align-items-center p-0 m-0">
                    {adminUserNameData ? 
                        (<>
                            <li className='admin pt-4 pb-4  rounded-circle d-flex justify-content-center align-items-center'>
                                <img src="/images/user.png" alt="" />
                                <span>{adminUserName}</span>
                            </li>
                            <li className='pt-4 pb-4 '>
                                <button className='btn' onClick={()=> handleLogout()}>Logout</button>
                            </li>
                        </>):
                        (<>
                            <li className='pageLinks pt-4 pb-4 '><Link to='/Admin-auth'>sign in</Link></li>
                            <li className='pageLinks pt-4 pb-4 '><Link to='/Admin-register'>sign out</Link></li>
                        </>)
                    }
                    
                    <li className='user d-none'><FontAwesomeIcon icon={faUser} /></li>
                    <li className='menuIcon pt-4 pb-4 ms-2' onClick={()=> handleClick()}>
                        {btn ? 
                            (<><FontAwesomeIcon icon={faXmark} /></>):
                            (<><FontAwesomeIcon icon={faBars} /></>)
                        }
                    </li>
                    
                </ul>
            </div>
        </div>
    </NavAdminContainer>
  )
}

export default NavAdmin
