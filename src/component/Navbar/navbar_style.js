import styled from 'styled-components';


export const Navbar = styled.nav`
background:#fff;
width:100%;
padding:20px 0;
position:fixed;
top:0;
left:0;
right:0;
z-index:9985;
    &.activeAnimation{
        transform: translateY(0);
        animation: animation-nav-sticky 1s ease;
        transition:all .8s ease;
    }
    &.active{
        position: fixed !important;
        width:100%;
        background:#fff;
        z-index:9985;
    }
    &.activeNavigate{
        position: fixed !important;
        width:100%;
        background:#fff;
        z-index:9995;
    }
        @keyframes animation-nav-sticky {
            0% {
                opacity:0;
                background:rgba(255,255,255,0.1);
                transform: translateY(-200px);
                transition: transform .35s ease-in-out;
            }
            to {
                opactiy:1;
                background:#fff;
                transform: translateY(0);
                transition: transform .35s ease-in-out;
            } 
        }
`;

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
align-items:center;
@media(max-width:992px){
    .logo{
        margin-left:20px;
    }
}
`

export const NavUnorderedList = styled.ul`
display:flex;
justify-content:center;
align-items:center;
list-style:none;
width:60%;
padding:0;
margin:0;
    li{
        display:flex;
        position:relative;
        // margin-top:10px;
        transition:all 0.7s ease;
        a{
            display:block;
            padding:20px;
            text-decoration:none;
            font-weight:700;
            color:#333e48;
            transition:all 0.7s ease;
            &:hover{
                color:#5d3754;
            }
        }
        svg{
            position:absolute;
            right:0;
            top:25px;
            color:#333e48;
            font-size:12px;
            transition:all 0.7s ease;
            &:hover{
                color:#5d3754;
                cursor:pointer;
            }
        }
        &:hover{
            a,svg{
                color:#5d3754;
            }
        }
    }

@media(max-width:992px){
    display:none;
}

`

export const Menu = styled.div`
display: none;
justify-content: space-between;
align-items: center;
cursor: pointer;

@media(max-width:991px){
    display:flex;
    position:absolute;
    left:10px;
}
`
export const MenuList = styled.div`
display:block;
padding:20px;
width:40%;
height:100vh;
position:fixed;
top:0;
left:-100%;
z-index:9999;
background:#fff;
box-shadow:0 1px 2px rgba(51, 62, 72, 0.4);
transition:all 0.5s ease;
@media(max-width:540px){
width:100%;
}
    &.active{
        left:0;
    }
    svg{
        cursor:pointer;
        color:#333e48;
    }
    .unorderd-lists{
        padding:40px 0;
        li{
            padding:15px;
            a{
                width:100%;
                display:block;
                color:#333e48;
                text-decoration:none;
                font-weight:700;
            }
            p{
                color:#333e48;
                font-weight:700;
                padding:0;
                margin:0;
                cursor:pointer;
                width:100%;
            }
            .arrow{
                transition:all 0.7s ease;
                &.active{
                    transform:rotate(-180deg);
                }
            }
            .branch-lists{
                display:none;
                margin-left:-33px;
                transition:all 0.7s ease;
                li{
                    padding:12px 0;
                }
                &.active{
                    display:block;
                    height:auto;
                }
            }
            .userIcon{
                    svg{
                        display:block;
                        margin-top:2px;
                    }
                    a{
                        margin-left:10px;
                    }
                    img{
                        width:2.2rem;
                        height:2.2rem;
                    }
                    .logout{
                        margin-left:1rem;
                        margin-top:.5rem;
                    }
            }
        }
    }
`


export const ContactForm = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
.parent-form{
    .exitSearchMenu{
        display:none;
    }
}
@media(max-width:992px){
.parent-form{
    display:flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    top:-150px;
    left:0;
    background:#fff;
    width:100%;
    height:160px;
    z-index:9999;
    transition:all 0.3s ease-in-out;
    form{
        width:70%;
        input{
            width:100%;
            padding:10px;
        }
        button{
            top:30%;
        }
    }
    .exitSearchMenu{
        display:block;
        color:#333e48;
        margin-left:10px;
        svg{
            font-size:24px;
        }
    }
    &.active{
        top:0;
        z-index:9999 !important;
        animation: searchShow 0.3 ease-in-out;
        transition:all 0.3s ease-in-out;
    }
    @keyframes searchShow{
        from{
            opacity:0.3;
            transform:translateY(80px);
        }
        to{
            opacity:1;
            transform:translateY(0);
        }
    }
}
}
`

export const Form = styled.form`
display:flex;
justify-content:space-between;
align-items:center;
position:relative;

input{
    display:block;
    width:330px;
    padding:10px;
    border-radius: 25px;
    border:1px solid rgba(51, 62, 72 , 0.5);
    text-indent:10px;
    color:#333e48;
    font-weight:600;
    // font-size:18px;
    &:focus{
        border:1px solid #5d3754;
    }
}
button{
    position:absolute;
    top:25%;
    right:10px;
    border: none;
    background: inherit;
    & svg{
        color:#333e48;
        opacity:0.8;
        font-size:20px;
    }
}
`

export const ContactIcons = styled.div`
display:flex;
justify-content:center;
align-items:center;
    .search{
        display:none;
    }
    span{
        padding:0 5px;
        position:relative;
        & svg{
            font-size:24px;
            color:#333e48;
            transition:all 0.7s ease;
            &:hover{
                color:#5d3754;
                cursor:pointer;
            }
        }
    }
@media(max-width:992px){
    position:absolute;
    right:10px;
    .search{
        display:block;
    }
    .user_icon{
        display:none;
    }
}
`
export const ParentSpanIcon = styled.span`
    cursor:pointer;
    img{
        width:2rem;
        height:2rem;
    }
    .logout{
        color:rgba(28,28,28,1);
        font-weight:500;
    }
    .number{
        background:#5d3754;
        width:20px;
        height:20px;
        color:#fff;
        position:absolute;
        top:-10px;
        right:-7px;
        & span{
            font-size:12px;
            font-weight:700;
        }
    }
    @media(max-width:992px){
        &.user_icon{
            display:none !important;
        }
    }
`

export const ListPages = styled.li`
    position:relative;
    &:hover .lists-branch{
        display:block;
        animation: show 0.3s ease;
        transition:all 0.3s ease;
    }
    @keyframes show{
        from{
            opacity:0.3;
            transform:translateY(30px);
        }
        to{
            opactiy:1;
            transform:translateY(0);
        }
    }   
    & .lists-branch{
        display:none;
        position:absolute;
        left:0;
        top:60px;
        background:#fff;
        box-shadow:0 2px 3px rgba(51, 62, 72, 0.4);
        width:200px;
        height:300px;
        padding:15px;
        li{
            padding:0;
            margin:0;
            a{
               display:block;
               width:100%;
               padding:15px 0;
               font-weight:500;
               color:#333e48;
               opacity:0.8;
               transition:all 0.7s ease;
               &:hover{
                    opacity:1
               }
            }
        }
    }
`

export const MenuIcon = styled.span`
font-size:24px;
cursor:pointer;
`


export const CardShop = styled.div`
background:#fff;
position:fixed;
top:0;
right:-100%;
z-index:9999;
width:100%;
height:100vh;
box-shadow:0 1px 2px rgba(51, 62, 72, 0.4);
padding:30px;
animation:showCard 0.5s ease-in-out;
transition:all 0.5s ease-in-out;
@media(min-width:992px){
width:30%;
}
    &.active{
        right:0;
    }
    & h5{
        color:#333e48;
        margin-top:10px;
    }    
    & svg{
        color:#333e48;
        font-size:24px;
        cursor:pointer;
    }
@keyframes showCard{
    from{
        opacity:0;
    }    
    to{
        opacity:1;   
    }
}
    .parent_items_cards{
        width:100%;
        height:50vh;
        overflow:auto;
    }
    .parent_empty{
        display:flex;
        justify-content:center;
        align-items:center;
        margin-top:3.5rem;
        .empty_card{
            p{
                color:#333e48;
                font-size:26px;
                font-weight:600;
                padding-top:15px;
            }
            a{
                color:#333e48;
            }
        }
    }
    .parent_found{
        margin:3rem 0;
        height:100%;
        overflow:hidden;
        .parent_found_card{
            width:100%;
            padding:1rem 0;
            overflow-y:scroll;
            .found_card{
                .parent_text{
                    p{
                        pading:0;
                        margin:0;
                        font-size:1.3rem;
                        font-weight:700;
                        color:rgb(28,28,28);
                    }
                    span{
                        font-size:1rem;
                        color:rgba(28,28,28,.7);
                    }
                }
            }
        }
        .parent_found_details{
            bottom:30%;
            z-index:1;
            background:#fff;
            h4{
                color:rgba(28,28,28,1);
                font-size:2rem;
                font-weight:700
            }
            p{
                color:rgba(28,28,28,.75);
                font-size:1.3rem;
            }
        }
        .parent_btn{
            & button , a{
                display:flex;
                justify-content:center;
                align-items:center;
                width:100%;
                padding:10px 0;
                margin:1rem;
                transition:all 0.7s ease;
                &:hover{
                    transform:translateY(-5px);
                }
            }
            & button{
                background:#5d3754;
                color:#fff;
                border:none;
                font-size:1.2rem;
                font-weight:700;
                &:hover{
                    background:rgb(28,28,28);
                    color:#fff;
                    cursor:pointer;
                }
                .loader {
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    display: inline-block;
                    position: relative;
                    border: 3px solid;
                    border-color: #FFF #FFF transparent transparent;
                    box-sizing: border-box;
                    animation: rotation 1s linear infinite;
                }
                .loader::after,
                .loader::before {
                    content: '';  
                    box-sizing: border-box;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    border: 3px solid;
                    border-color: transparent transparent #4a4ac8 #4a4ac8;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-sizing: border-box;
                    animation: rotationBack 0.5s linear infinite;
                    transform-origin: center center;
                }
                .loader::before {
                    width: 32px;
                    height: 32px;
                    border-color: #FFF #FFF transparent transparent;
                    animation: rotation 1.5s linear infinite;
                }
                    
                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                } 
                @keyframes rotationBack {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(-360deg);
                    }
                }
            }
            & a{
                background:#fff;
                text-decoration:none;
                color:#333e48;
                border:1px solid #5d3754;
                font-size:1.2rem;
                font-weight:700;
                &:hover{
                    background:#5d3754;
                    color:#fff;
                    cursor:pointer;
                }
            }
        }
    }
`
export const WidthScreen = styled.div`
display:none;
position:fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:9990;
width:100%;
height:100vh;
background:rgba(28,28,28,0.75);
opacity:0.8;
transition:all 0.7s ease-in-out;
    &.active{
        display:block;
        cursor: crosshair;
    }
`


