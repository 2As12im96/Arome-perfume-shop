import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../redux/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Url } from '../../redux/api';

function navbar_logic() {
    const [shop , setShop] = useState(false);
    const [menu , setMenu] = useState(false);
    const [screen , setScreen] = useState(false);
    const [search , setSearch] = useState(false);
    const [navScroll , setnavScroll] = useState(false);
    const lists = useRef(null);
    const [activeNavigate , setActiveNavigate] = useState(false);
    const [activeAnimation , setActiveAnimation] = useState(false);
    const icons = useRef(null);
    let body = document.body;
    const [isAnyOverlayOpen, setIsAnyOverlayOpen] = useState(false);

    useEffect(() => {
        if (isAnyOverlayOpen) {
            document.body.classList.add('active');
        } else {
            document.body.classList.remove('active');
        }
    }, [isAnyOverlayOpen]);
    /*---------------------------------------*/
    //Add move when window scroll
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 250 ? setActiveAnimation(true) : setActiveAnimation(false);

        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    },[]);
    /*---------------------------------------*/

    /*---------------------------------------*/
    const handleClick = () => {
        body.classList.toggle('active');
        setShop(true);
        setScreen(true);
        setnavScroll(true);
    };
    const handleClickMenu = () => {
        body.classList.toggle('active');
        setMenu(true);
        setScreen(true);
        setnavScroll(true);
    };

    const hiidenShoppingCardMenu = ()=> {
        if(body.classList.contains('active')){
            body.classList.remove('active');
            setShop(false);
            setMenu(false);
            setScreen(false);
            setSearch(false);
            setnavScroll(false);
            setActiveNavigate(false);
            setIsAnyOverlayOpen(false);
        }
    }
    const handleClickMenuLink = ()=> {
        if(lists.current){
            lists.current.classList.toggle('active');
        }
        if(icons.current){
            icons.current.classList.toggle('active');
        }
        setnavScroll(true);
    }
    const handleClickSearch = () => {
            body.classList.toggle('active');
            setSearch(true);
            setScreen(true);
            setActiveNavigate(true);
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogoutWithBackend = async () => {
        try {
            const response = await axios.post(`${Url}/auth/logout`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            dispatch(logoutUser()); 
            console.log('Logged out successfully.');
            localStorage.removeItem('tokenClient');
            localStorage.removeItem('userClient');
            localStorage.removeItem('cartItems');
            localStorage.removeItem('favoriteItems');
            localStorage.removeItem('justOneProduct');
        
            navigate('/');

        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    const carts = useSelector(state => state.cart);
    const user = useSelector(state => state.auth);
    //Checkout
    const [isLoading, setIsLoading] = useState(false);
    const checkout = () => {
        setIsLoading(true);
        let currentUserId = user ? user._id : null;
        if (!currentUserId) {
            try {
                const userFromLocalStorage = localStorage.getItem('user')
                if (userFromLocalStorage) {
                    const parsedUser = JSON.parse(userFromLocalStorage);
                    currentUserId = parsedUser.id; 
                }
            } catch (e) {
                console.error("Error parsing user from localStorage:", e);
            }
        }

        if (!currentUserId) {
            console.error("User ID is not available. Please log in.");
            setIsLoading(false);
            return;
        }

        axios.post(`${Url}/stripe/create-checkout-session`, {
            carts: carts.cartItems,
            userId: currentUserId
        })
        .then((res) => {
            if (res.data.url) {
                window.location.href = res.data.url;
            }
        })
        .catch((err) => {
            console.error("Error creating checkout session:", err.message);
            setIsLoading(false);
        })
        .finally(() => {
            setIsLoading(false);
        });
    };
    /*---------------------------------------*/
  return  {
    shop,
    menu,
    screen,
    search,
    navScroll,
    activeNavigate,
    activeAnimation,
    lists,
    icons,
    isLoading,
    handleClick,
    handleClickMenu,
    hiidenShoppingCardMenu,
    handleClickMenuLink,
    handleClickSearch,
    setShop,
    setMenu,
    setScreen,
    setSearch,
    handleLogoutWithBackend,
    checkout,
  };
}

export default navbar_logic
