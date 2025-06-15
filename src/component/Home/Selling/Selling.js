import styled from "styled-components";

export const Selling = styled.section`

`

export const WomenSelling = styled.div`
    .title{
        h2{
            color:rgba(28,28,28,1);
            font-weight:700;
            font-size:36px;
        }
        p{
            color:#5d3754;
            font-size:18px;
            letter-spacing:1px;
        }
    }
    .slick-slider{
        position:relative;
        z-index:1061;
        .slick-prev{
            posirtion:absolute;
            z-index:1061;
        }
        .slick-arrow{
            background:#5d3754;
            width:3.5rem;
            height:3.5rem;
            border-radius:50%;
        } 
        .slick-arrow , .slick-dots{
            // display:none !important;
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
    .slick-arrow , .slick-dots{
        display:none !important;
    } 
    .card{
        .card_icons{
            right:10px;
        }
        &:hover .card_icons .icon{
            animation:none;
        }
    }
}
`

export const Featured = styled.div`
background:#5d3754;
padding:2rem 0;
margin:10rem 0;
    .text{
        color:#fff;
        // padding:15px;
        border-right:1px solid #fff;
    }
@media(min-width:768px){
    .text{
        padding:5px;
    }
}
@media(max-width:568px){
    .text{
        margin:10px 0;
        border:none;
    }
}
`

export const Offer = styled.div`
position:relative;
margin:10rem 0;
border-radius:20px;
    .offer-parent{
        outline:0.1rem dotted rgba(28,28,28,.25);
        outline-offset:-1.5rem;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .offer-info{
            margin-left:10rem;
            .offer-text{
                p{
                    padding:0;
                    margin:0;
                    font-size:1.5rem;
                    font-weight:200;
                    letter-spacing:0.3rem;
                    color:rgb(28,28,28,.75);
                }
                strong{
                    font-size:4.8rem;
                    padding-right:10px;
                }
                .off{
                    font-size:6rem;
                    font-weight:700;
                    color:rgb(248,248,248);
                    text-shadow:-2px 2px 0 rgba(28,28,28,1),
                                2px 2px 0 rgba(28,28,28,1),
                                2px -2px 0 rgba(28,28,28,1),
                                -2px -2px 0 rgba(28,28,28,1);
                }
                .link{
                    font-size:24px;
                    color:#1c1c1c;
                    text-decoration:underline;
                    outline-underline-offset:0.3rem;
                }
            }
        }
        .offer-img{
            border-radius:10px;
            height:380px;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
                border-radius:10px;
            }
        }
    }
@media(max-width:568px){
    .offer-parent{
        outline-offset:-.5rem;
        outline:0.1rem dotted rgba(28,28,28,.75);
        flex-direction:column-reverse;
        .offer-info{
            padding:3rem 0;
        }
    }
}
@media(max-width:992px){
margin:5rem 0;
    .offer-parent{
        .offer-info{
            margin-left:0;  
        }
    }
}
` 