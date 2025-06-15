import styled from "styled-components";

export const TestimonialContainer = styled.section`
margin-top: 5rem;
display: flex;
justify-content: center;
margin:10rem 0;
    h5{
        color:rgba(28,28,28,1);
        font-size:3rem;
        font-weight:700;
        margin:2rem 0;
    }
    .slick-slider{
        .slick-arrow , .slick-dots{
            display:none !important;
        } 
    }
    .card{
        border:none;
        padding:15px;
        margin:10px;
        border-radius:15px;
        box-shadow:0 2px 3px rgba(18,18,18,0.5);
        overflow:hidden;
        transition:all 0.7s ease;
        .card_img{
            img{
                width:100%;
                height:100%;
                object-fit:cover;
            }
            .after{
                display:none;
            }
        }
        &:hover .card_icons{
            right:10px;
        }
        &:hover .card_icons .icon{
            animation:fadeRight 0.5s ease;
        }
        &:hover .card_img .before{
            display:none;
        }
        &:hover .card_img .after{
            display:block;
        }
        .card_icons{
            top:10px;
            right:-50px;
            transition:all 0.7s ease;
            .icon{
                width:40px;
                height:40px;
                margin:10px 0;
                background:#fff;
                box-shadow:0 2px 3px rgba(28,28,28,0.5);
                cursor:pointer;
                transition:all 0.7s ease;
                svg{
                    transition:all 0.7s ease;
                }
                &:hover{
                    background:#5d3754;
                }
                &:hover svg{
                    color:#fff;
                }
                &.icon_Not{
                    background:#5d3754;
                    img{
                        filter:invert(1);
                    }
                }
            }    
        }
        .card_info{
            .card_body{
                .stars_icon{
                    svg{
                        color:#5d3754;
                        font-size:12px;
                        padding:0 1px;
                    }
                }
                .card_title{
                    h3{
                        padding:10px 0;
                        font-size:20px;
                        font-weight:700;
                        a{
                            text-decoration:none;
                            color:rgba(28,28,28,1);
                        }
                    }
                }
                .card_text{
                    span{
                        font-size:22px;
                        font-weight:700;
                    }
                    .sallery{
                        color:#5d3754;
                        padding-right:10px;
                    }
                    .discount{
                        font-size:20px;
                        text-decoration:line-through;
                        color:rgba(18,18,18,0.5);
                    }
                }
            }
        }
    }
    @keyframes fadeRight{
        from{
            opacity:0;
            transform:translateX(100px);
        }
        to{
            opacity:1;
            transform: translateX(0);
        }
    }
    @media(max-width:568px){
        margin:0;
        h5{
            font-size:1.8rem;
        }
    }
`
