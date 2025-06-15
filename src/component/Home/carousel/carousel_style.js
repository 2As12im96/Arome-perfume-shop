import styled from "styled-components";

export const CarouselFade = styled.div`
// height:90vh;
margin-top:104px;
z-index:1000;
transition:all 1.5s ease;
    &:hover .carousel-control-prev,&:hover .carousel-control-next{
        opacity:1;
    }
    .carousel-indicators{
        button{
            width:8px;
            height:8px;
            background:rgba(0,0,0,0.5);
            border:1px solid rgba(0,0,0,0.5);
            &.active{
                background:#000;
            }
        }
    }
    .carousel-inner{
        .carousel-item{
            .carousel-caption{
                top:25%;
                animation:caption 0.7s ease;
                transition:all 0.7s ease;
                color:rgba(28,28,28,1);
                h5{
                    font-size:4.5rem;
                    font-weight:700;
                    animation:fadeInUp 1.5s ease;
                    transition:all 0.7s ease;
                }
                @keyframes fadeInUp{
                    from{
                        opacity:0;
                        transform:translate3d(0,100%,0);
                    }
                    to{
                        opacity:1;
                        transform: translateZ(0);
                    }
                }
                p{
                    font-size:20px;
                    animation:fadeInUp 1.5s ease;
                    transition:all 0.7s ease;
                }
                button{
                    background:#5D3754;
                    border:1px solid #5D3754;
                    border-radius:10px;
                    color:#fff;
                    width:9rem;
                    font-weight:700;
                    animation:fadeInUp 1.5s ease;
                    transition:all 0.7s ease;
                    a{
                        display:block;
                        color:#fff;
                        padding:10px;
                        text-decoration:none;
                    }
                    &:hover{
                        background:rgba(28,28,28,1);
                        border:1px solid rgba(28,28,28,1);
                    }
                }
                &.text-left{
                    left:unset;
                }
            }
            @keyframes caption{
                from{
                    transform:translateY(50px);
                    opacity: 0;
                }
                to{
                    transform: translateY(0);
                    opacity:1;
                }
            }
        }
    }
    .carousel-control-prev,
    .carousel-control-next{
        width:60px;
        height:60px;
        top:40%;
        opacity:0;
        background:rgb(28,28,28);
        margin:0 30px;
        animation:opacity 1.5s ease;
        transition:all 0.7s ease;
        &:hover{
            background:#5D3754;
        }
        .carousel-control-prev-icon,
        .carousel-control-next-icon{
            width:18px;
            height:18px;
        }
    }
@media(max-width:992px){
margin-top:79px;
height:auto;
    .carousel-inner{
            .carousel-item{
                .carousel-caption{
                    top:15px;
                    h5{
                        font-size:2rem;
                    }
                }
            }
        }
}
@media(max-width:540px){
    .carousel-indicators{
        top:100%;
    }
    .carousel-inner{
        img{
            width:100%;
            height:40vh;
            object-fit:cover;
        }
        .carousel-item{
            .carousel-caption{
                position:static;
                text-align:center !important;
                p{
                    padding:0 3.5rem;
                }
            }
        }
    }
    .carousel-control-prev,
    .carousel-control-next{
        display:none;
    }
}
`