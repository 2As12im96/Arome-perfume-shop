import styled from "styled-components";


export const CartContianer = styled.section`
    .breadcrumb-nav{
        margin-top:6rem;
        background:#5D3754;
        width:100%;
        padding:3rem 0;
        .breadcrumb{
            .breadcrumb-item{
                color:rgba(255,255,255,0.7);
                font-size:1.1rem;
                font-weight:500;
                a{
                    color:rgba(255,255,255,0.7);
                    text-decoration:none;
                }
            }
            .breadcrumb-item::before{
                color:rgba(255,255,255,0.7);
            }
        }
    }
    .shopping-empty{
        h1{
            color:rgb(28,28,28);
           
        }
        div{
            a{
                border-radius:15px;
                padding:10px;
                display:block;
                margin:10px 0;
                text-align:center;
                width:15rem;
                background:#5D3754;
                text-decoration:none;
                color:#fff;
                font-weight:700;
                transition:all 0.7s ease;
                &:hover{
                    background:rgb(28,28,28);
                    transform:translateY(-2px);
                }
            }
        }
    }
    .shopping-cart{
        h1{
            color:rgb(28,28,28);
        }
        .table-parent{
            overflow:auto;
            table{
                thead{
                    tr{
                        td{
                            color:rgba(28,28,28,.7);
                            font-size:1.3rem;
                        }
                    }
                }
                tbody{
                    tr{
                        td{
                            .product-item{
                                .product-img{
                                    img{
                                        width:8rem;
                                        height:8rem;
                                    }
                                }
                                .product-info{
                                    margin-top:10px;
                                    .span{
                                        color:rgba(28,28,28,.7);
                                        font-size:1.2rem;
                                        margin:0;
                                    }
                                    strong{
                                        color:rgba(28,28,28,.8);
                                        font-size:1.3rem;
                                        margin-top:15px; 
                                    }
                                }
                            }
                            & > span{
                                margin-top:15px;
                                font-size:1.2rem;
                                color:rgba(28,28,28,.7);
                            }
                            .total{
                                color:#5D3754;
                                font-size:1.5rem;
                                font-weight:700;
                            }
                            svg{
                                margin-left:20px;
                                cursor:pointer;
                            }
                            .count{
                                button{
                                    margin:0 10px;
                                    width:1.2rem;
                                    height:1.2rem;
                                    background:silver;
                                    color:rgb(28,28,28);
                                    border:none;
                                    transition:all 0.3s ease;
                                    &:hover{
                                        background:#5D3754;
                                    }
                                }
                            }
                        }
                        & td:nth-child(3){
                            width:20%;
                        }
                        & td:nth-child(4){
                            width:25%;
                        }
                    }
                }
            }
        }
        .line{
            border:.5px solid rgba(28,28,28,.2);
        }
        .checkout-details{
            .btns{
                .text{
                    strong{
                        font-size:1.5rem;
                        color:rgb(28,28,28);
                    }
                    p{
                        color:#5D3754;
                        font-size:2rem;
                        font-weight:700;
                        margin-top:-6px;
                        margin-left:10px;
                    }
                    a{
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        text-decoration:none;
                        color:rgb(28,28,28);
                        padding:10px;
                        margin-right:10px;
                        border-radius:20px;
                        width:13rem;
                        background:#dddddd;
                        transition:all 0.7s ease;
                        &:hover{
                            background:#5D3754;
                        }
                    }
                    button{
                        background:#5D3754;
                        padding:10px;
                        border:none;
                        border-radius:20px;
                        width:10rem;
                        font-weight:700;
                        transition:all 0.7s ease;
                        &:hover{
                            background:rgb(28,28,28);
                            color:#fff;
                        }
                    }
                }
                & .text:nth-child(1){
                    border-bottom:.5px solid rgba(28,28,28,.2);
                }
            }
            .checkout{
                background:#5D3754;
                padding:10px;
                border:none;
                border-radius:20px;
                font-weight:700;
                transition:all 0.7s ease;
                &:hover{
                    background:rgb(28,28,28);
                    color:#fff;
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
        }
    }
    .featured{
        h1{
            color:rgba(28,28,28,1);
            font-weight:700;
        }
        .text{
            color:#5D3754;
        }
        .card{
            .card-img {
                border-top-right-radius:15px;
                border-top-left-radius:15px;
                border-bottom-right-radius:0;
                border-bottom-left-radius:0;
                background:#51ade5;
                color:#fff;
                svg{
                    path{
                        fill:currentColor;
                    }
                }
            }
            .card-info{
                .stars_icon{
                    svg{
                        padding-left:5px;
                        margin:5px 0;
                        color:#5D3754;
                        font-size:10px;
                    }
                }
                span{
                    color:rgba(28,28,28,.7);
                    font-size:1.2rem;
                    font-weight:700;
                }
                p{
                    color:rgb(28,28,28);
                    font-weight:700;
                    font-size:1.8rem;
                }
            }
        }
    }
@media(max-width:568px){
    .breadcrumb-nav{
        padding:.8rem 0;
    }
    .shopping-cart{
        table{
            tbody{
                tr{
                    & td:nth-child(4){
                        width:100%;
                    }
                }
            }
        }
        .checkout-details{
            .btns{
                flex-wrap:wrap;
                .text{
                    width:100% !important;
                    button ,a{
                        width:100% !important;
                    }
                }
            }
            button{
                width:100% !important;
            }
        }
    }
}
`