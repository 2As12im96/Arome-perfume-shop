import React, { useEffect, useState } from 'react';
import { OverviewContainer } from './Overview.style';
import NavAdmin from '../NavAdmin/Nav';
import Aside from '../Asidebar/Aside';
import axios from 'axios';
import { setHeaders, Url } from '../../../redux/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faMoneyBill, faUsers } from '@fortawesome/free-solid-svg-icons';
import Charts from './Charts';
import Transictions from './Transiction';
import AllTimeData from './AllTimeData';

function Overview() {
    const [isActive, setIsActive] = useState(false);

    // User Data
    const [users, setUsers] = useState([]);
    const [usersPerc, setUsersPerc] = useState(0); 
    const [usersLoading, setUsersLoading] = useState(true); 
    const [usersError, setUsersError] = useState(null);

    // Orders Data
    const [orders, setOrders] = useState([]);
    const [ordersPerc, setOrdersPerc] = useState(0); 
    const [ordersLoading, setOrdersLoading] = useState(true);
    const [ordersError, setOrdersError] = useState(null);

    // Earning Data
    const [earn, setEarn] = useState([]);
    const [earnPerc, setEarnPerc] = useState(0);
    const [earnLoading, setEarnLoading] = useState(true);
    const [earnError, setEarnError] = useState(null);

    
    function compare(a, b) {
        if (a._id < b._id) {
            return 1;
        }
        if (a._id > b._id) {
            return -1;
        }
        return 0;
    }

    // --- Users State Fetch ---
    useEffect(() => {
        async function fetchUsersData() {
            setUsersLoading(true);
            setUsersError(null);
            try {
                const resUsers = await axios.get(`${Url}/users/find/all-stats`, setHeaders());
                const usersData = resUsers.data;
                setUsers(usersData);
                if (usersData && usersData.length >= 2) {
                    const currentMonthUsers = usersData[0].total;
                    const previousMonthUsers = usersData[1].total;
                    if (previousMonthUsers !== 0) {
                        setUsersPerc(((currentMonthUsers - previousMonthUsers) / previousMonthUsers) * 100);
                    } else {
                        setUsersPerc(currentMonthUsers > 0 ? 100 : 0); 
                    }
                } else if (usersData.length === 1 && usersData[0].total > 0) {
                    setUsersPerc(100);
                } else {
                    setUsersPerc(0);
                }
            } 
            catch (err) {
                console.error("Error fetching users data:", err);
                setUsersError(err.message || "Failed to fetch user data.");
            } 
            finally {
                setUsersLoading(false);
            }
        }
        fetchUsersData();
    }, []); 

    // --- Orders State Fetch ---
    useEffect(() => {
        async function fetchOrdersData() {
            setOrdersLoading(true);
            setOrdersError(null);
            try {
                const resOrders = await axios.get(`${Url}/order/all-stats`, setHeaders());
                const ordersData = resOrders.data.sort(compare); 
                setOrders(ordersData);
                if (ordersData && ordersData.length >= 2) {
                    const currentMonthOrders = ordersData[0].total;
                    const previousMonthOrders = ordersData[1].total;
                    if (previousMonthOrders !== 0) {
                        setOrdersPerc(((currentMonthOrders - previousMonthOrders) / previousMonthOrders) * 100);
                    } else {
                        setOrdersPerc(currentMonthOrders > 0 ? 100 : 0);
                    }
                } else if (ordersData.length === 1 && ordersData[0].total > 0) {
                    setOrdersPerc(100);
                } else {
                    setOrdersPerc(0);
                }
            } 
            catch (err) {
                console.error("Error fetching orders data:", err);
                setOrdersError(err.message || "Failed to fetch order data.");
            } 
            finally {
                setOrdersLoading(false);
            }
        }
        fetchOrdersData();
    }, []);

    // --- Earnings State Fetch ---
    useEffect(() => {
        async function fetchEarnData() {
            setEarnLoading(true);
            setEarnError(null);
            try {
                const resEarning = await axios.get(`${Url}/order/all-earn/stats`, setHeaders());
                const earnData = resEarning.data.sort(compare); 
                setEarn(earnData);

                if (earnData && earnData.length >= 2) {
                    const currentMonthEarn = earnData[0].total;
                    const previousMonthEarn = earnData[1].total;
                    if (previousMonthEarn !== 0) {
                        setEarnPerc(((currentMonthEarn - previousMonthEarn) / previousMonthEarn) * 100);
                    } else {
                        setEarnPerc(currentMonthEarn > 0 ? 100 : 0);
                    }
                } else if (earnData.length === 1 && earnData[0].total > 0) {
                    setEarnPerc(100);
                } else {
                    setEarnPerc(0);
                }
            } catch (err) {
                console.error("Error fetching earnings data:", err);
                setEarnError(err.message || "Failed to fetch earnings data.");
            } finally {
                setEarnLoading(false);
            }
        }
        fetchEarnData();
    }, []);


    const data = [
        {
            id: 1,
            icon: faUsers,
            icon_color: '#6C61F7',
            icon_bgcolor: '#373863',
            member: users[0]?.total, 
            name: 'Users',
            percentage: usersPerc, 
        },
        {
            id: 2,
            icon: faListUl,
            icon_color: '#38D0F1',
            icon_bgcolor: '#314561',
            member: orders[0]?.total, 
            name: 'Orders',
            percentage: ordersPerc,
        },
        {
            id: 3,
            icon: faMoneyBill,
            icon_color: '#D6B77A',
            icon_bgcolor: '#484249',
            member: '$' + (earn[0]?.total?.toFixed(0) || '0.00'), 
            name: 'Earnings',
            percentage: earnPerc,
        },
    ];

    const dataUI = data.map((item) => {
        const percentageColor = item.percentage >= 0 ? '#5D9555' : '#A73F56';
        const formattedPercentage = item.percentage?.toFixed(2) + '%'; 

        return (
            <div key={item.id} id={item.id} className='child_icon d-flex justify-content-between align-items-center'>
                <span className='icon_bx d-flex justify-content-center align-items-center rounded' style={{ background: item.icon_bgcolor }}>
                    <FontAwesomeIcon icon={item.icon} style={{ color: item.icon_color, fontSize: '2rem' }} />
                </span>
                <span className='d-block icon_data'>
                    <span className='d-block icon_member'>{item.member === undefined ? 'N/A' : item.member}</span>
                    <span className='d-block icon_name'>{item.name}</span>
                </span>
            </div>
        );
    });

    return (
        <>
            <NavAdmin isActive={isActive} setIsActive={setIsActive} />
            <OverviewContainer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Aside isActive={isActive} setIsActive={setIsActive} />
                        </div>
                        <div className='col-lg-9'>
                            <div className='row'>
                                <div className='col-lg-8'>
                                    <div className='component_products create_form mt-3'>
                                        <div className="summary_overview w-100 rounded">
                                            <h2>Overview</h2>
                                            <p>How your shop is performing compared to the previous month.</p>
                                            <div className='parent_icons d-flex justify-content-between align-items-center'>
                                                {(usersLoading || ordersLoading || earnLoading) ? (
                                                    <div className="loader-screen d-flex justify-content-center align-items-center w-100" style={{ minHeight: '150px' }}>
                                                        <div className="spinner-border text-primary" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </div>
                                                    </div>
                                                ) : (usersError || ordersError || earnError) ? (
                                                    <div className="alert alert-danger w-100" role="alert">
                                                        Error loading data. Please try again.
                                                        {usersError && <p>Users: {usersError}</p>}
                                                        {ordersError && <p>Orders: {ordersError}</p>}
                                                        {earnError && <p>Earnings: {earnError}</p>}
                                                    </div>
                                                ) : (
                                                    dataUI
                                                )}
                                            </div>
                                        </div>
                                        <div className='syled-charst mt-4'>
                                            <Charts />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='component_products create_form'>
                                        <Transictions />
                                        <AllTimeData/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </OverviewContainer>
        </>
    );
}

export default Overview;