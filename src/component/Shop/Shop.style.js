import styled from "styled-components";

export const ShopContainer = styled.section`
    .loading{
        p{
            color:rgba(28,28,28,1);
        }
    }
    .breadcrumb-nav{
        margin-top:6rem;
        width:100%;
        padding:3rem 0;
        .breadcrumb{
            .breadcrumb-item{
                color:rgba(28,28,28,.75);
                font-size:1.1rem;
                font-weight:500;
                a{
                    color:rgba(28,28,28,.75);
                    text-decoration:none;
                }
            }
            .breadcrumb-item::before{
                color:rgba(28,28,28,.75);
            }
        }
    }
    .accordion{
        h5{
            color:rgba(28,28,28,1);
            font-size:2rem;
        }
        .line{
            background:#333e48;
            height:1px;
        }
        .type-product{
            border-bottom:1px solid #dddddd;
        }
        label{
            cursor:pointer;
            color:rgba(28,28,28,1)
        }
        input{
            accent-color:#5d3754;
        }
        .lenght{
            color:rgba(28,28,28,1)
        }
    }
    .page-item{
        .page-link{
            color:#5d3754;
        }
        &.active{
        .page-link{
                background:#5d3754;
                border:1px solid #5d3754;
                box-shadow:0 3px 5px #5d3754;
                color:#fff;
            }
        }
        &.disabled{
            .page-link{
                color:#6c757d;
            }
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
        .new{
            border-radius:20px;
            // padding:5px;
            color:#fff;
            background:#5d3754;
            width:5rem;
        }
        a{
            color:rgba(28,28,28,1);
        }
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
                    color:#fff;
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
        .breadcrumb-nav{
            padding:.8rem 0;
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


export const ShopContent = styled.div`
    margin:10rem 0;
    .shop-contnet-img{
        height:34rem;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:20px;
        }
    }
    .shop-content-info{
        h6{
            color:rgba(28,28,28,1);
            font-size:2rem;
            font-weight:700;
        }
        p{
            color:rgba(28,28,28,.7);
            font-size:1.1rem;
        }
        .item{
            img{
                widht:5rem;
                height:4rem;

            }
            .text{
                p{
                    font-size:1.3rem;
                    font-weight:700;
                    color:rgba(28,28,28,1);
                    padding:0;
                    margin:0;
                }
                span{
                   color:rgba(28,28,28,.7); 
                }
            }
        }    
    }
`