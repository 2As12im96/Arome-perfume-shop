import styled from "styled-components";

export const DetailsContainer = styled.section`
    .container-img{
        .parent-img{
            border:1px solid rgba(28,28,28,.2);
            img{
                width:100%;
                height:100%;
            }
        }
        .child-img{
            & img:nth-child(1){
                margin:15px 0;
            }
            img{
                width:9rem;
                border:1px solid rgba(28,28,28,.2);
                margin:15px 10px;
                opacity:1;
                transition:opacity 0.7s ease;
                &:hover{
                    opacity:0.7;
                    cursor:pointer;
                }
                &.active{
                    border:1px solid rgba(28,28,28,1);
                }
            }
        }
    }
    .container-info{
        .breadcrumb-nav{
            .breadcrumb{
                li{
                    a{
                        color:#6c757d;
                        text-decoration:none;
                    }
                }
            }
        }
        .text{
            margin-left:1.5rem;
            .title{
                color:rgba(28,28,28,.7);
                font-size:1.25rem;
                font-weight:400;
            }
            .stars_icon{
                margin-top:5px;
                svg{
                    font-size:10px;
                    color:#5d3754;
                }
                .num{
                    margin-left:10px;
                }
            }
            h2{
                color:rgba(28,28,28,1);
                font-weight:700;
            }
            .sallery{
                font-size:1.5rem;
                font-weight:700;
                .cost{
                    color:#5d3754;
                }
                .discount{
                    color:rgba(28,28,28,.7);
                    font-size:1.2rem;
                    text-decoration:line-through;
                }
            }
            .q{
                font-size:1.1rem;
                font-weight:600;
                color:rgba(28,28,28,.7)
            }
            h5{
                font-weight:700;
                margin:10px 0;
                color:rgba(28,28,28,.7)
            }
            .btns{
                .count{
                    margin:10px 0;
                    button{
                        width:1.2rem;
                        height:1.2rem;
                        border:none;
                        &.disabled{
                            cursor:not-allowed;
                        }
                    }
                }
            }
            .btn{}
            .button{
                margin:10px 0;
                padding:13px;
                background:#5d3754;
                border-radius:10px;
                border:none;
                color:#fff;
                font-weight:600;
                transition:all .7s ease;
                &:hover{
                    background:rgba(28,28,28,1);
                    transform:translateY(-2px);
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
            .discription{
                .heading{
                    h6{
                        color:rgba(28,28,28,1);
                        font-size:1.5rem;
                        font-weight:700;
                        margin-top:5px;
                        margin-left:10px;
                    }
                    span{
                        width:1rem;
                        height:1rem;
                        border:1px solid rgba(28,28,28,.2);
                        margin-top:10px;
                        svg{
                            font-size:15px;
                        }
                    }
                }
                p{
                    color:rgba(28,28,28,.7);
                    font-size:1.1rem;
                }
            }
        }
    }
    @media(max-width:992px){
        .container-img{
            .child-img{
                img{
                    width:25%;
                    margin:15px 4px;
                }
            }
        }
        .container-info{
            .text{
                margin-left:0;
            }
        }
    }
`