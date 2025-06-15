import styled from "styled-components";

export const WishlistContainer = styled.section`
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
    .wishlist-parent{
        .wishlist-child{
            // height:100%;
            h1{
                color:rgba(28,28,28,1);
                font-weight:700;
                margin:1.5rem 0;
            }
            p{
                color:rgba(28,28,28,.7);
                padding:0;
                margin:0;
                font-size:1.1rem;
            }
            button{
                border:none;
                width:100%;
                a{
                    display:block;
                    text-decoration:none;
                    background:#5D3754;
                    color:#fff;
                    font-weight:700;
                    padding:15px;
                    border-radius:15px;
                    margin:3rem 0;
                    transition:all 0.7s ease;
                    &:hover{
                        background:rgba(28,28,28,1);
                        transform:translateY(-5px);
                    }
                }
            }
        }
        .wishlist-found-product{
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
            &:hover .card_img .before{
                display:none;
            }
            &:hover .card_img .after{
                display:block;
            }
            .card_icons{
                top:10px;
                right:10px;
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
                        color:rgb(28,28,28);
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