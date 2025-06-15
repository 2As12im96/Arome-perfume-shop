import React, { useEffect, useState } from 'react'
import { UsersContainer } from './users.style'
import NavAdmin from '../NavAdmin/Nav';
import Aside from '../Asidebar/Aside';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBasicsUsers } from '../../../redux/authSlice';
import UsersList from './UsersLists';



function Users() {
    const [isActive, setIsActive] = useState(false);
    const auth = useSelector(state=> state.auth);

    const { data: usersData, loading } = auth;

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBasicsUsers());
    }, [])
    return (
        <>
            <NavAdmin isActive={isActive} setIsActive={setIsActive}/>            
            <UsersContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Aside isActive={isActive} setIsActive={setIsActive}/>
                        </div>
                        <div className="col-lg-9">
                            <div className="create_page mt-3 mb-5">
                                <h2>Users</h2>
                                {loading === true ? 
                                    (<>
                                        <div className="loader-screen d-flex justify-content-center align-items-center">
                                            <div className="spinner-border" role="status">
                                                <span className="loader"></span>
                                            </div>
                                        </div>
                                    </>) : 
                                    (<>
                                        <div className="users">
                                            <UsersList/>
                                        </div>
                                    </>)
                                }  
                            </div>
                        </div>
                    </div>
                </div>
            </UsersContainer>
        </>
    )
}

export default Users
