import styled from "styled-components";

export const FooterElement = styled.footer`
margin:10rem 0 5rem;
    .child-footer{
        .head-title{
            margin:30px 0;
        }
        p{
            margin-top:-10px;
            margin-bottom:2rem;
            font-size:1.2rem;
            color:rgba(28,28,28,1);
        }
        .social-icons{
            span{
                margin:0 10px;
                a{
                    color:#5d3754;
                    transition:all 0.7s ease;
                    svg{
                        font-size:14px;
                        transition:all 0.7s ease;
                    }
                }
                &:hover a svg{
                    transform:translateY(-5px);
                }
            }
        }
        h5{
            color:rgba(28,28,28,1);
            font-size:1.5rem;
            font-weight:700;
            .icon{
                display:none;
            }
        }
        ul{
            padding-left:0;
            li{
                a{
                    position:relative;
                    display:block;
                    font-size:18px;
                    color:rgb(28,28,28);
                    margin-bottom:20px;
                    text-decoration:none;
                    transition:all 0.7s ease;
                    &:before {
                        content: "";
                        margin-right: 6px;
                        padding-left: 0;
                        font-size: 1.3rem;
                        position: relative;
                        top: -5px;
                        display: inline-block;
                        width: 7px;
                        height: 1px;
                        background: rgb(28,28,28);
                        transition: .3s;
                    }
                    &:hover:before{
                        width:15px;
                    } 
                }
            }
        }
        form{
            input{
                border:1px solid rgba(28,28,28,.75);
                border-radius:10px;
                &:focus{
                    box-shadow:none;
                }
            }
            button{
                border:none;
                top:7px;
                right:7px;
                svg{
                    color:rgba(28,28,28,.75)
                }
            }
        }
    }
@media(max-width:992px){
margin:0;
}
@media(max-width:568px){
   .child-footer{
        overflow:hidden;
        h5{
            .icon{
                display:block;
                svg{
                    transition:all 0.7s ease;
                }
                &.active svg{
                    transform:rotate(-180deg);
                }
                @keyframes x{
                    from{
                        transform:rotate(-180deg);
                    }
                    to{
                        transform:rotate(0);
                    }
                }
            }
        }
        .ul{
            height:0;
            display:block;
            overflow:hidden;
            transition:all 0.7s ease;
            &.active{
                height:auto;
            }
        }
    }
    .container .row .col-lg-3:nth-child(1) {
        display:none;
    }
}
`


export const FooterEnd = styled.div`
    .parent{
        ul{
            padding:0;
            margin:0;
        }
        p{
            color:rgba(28,28,28,.5);
            font-size:18px;
            font-weight:600;
        }
    }
    .scrollToTop{
        position:fixed;
        bottom:-100%;
        right:5%;
        z-index:9980;
        background:#5d3754;
        width:40px;
        height:40px;
        transition:all 0.7s ease;
        border-radius:50%;
            svg{
                color:#fff;

            }
        &.active{
            bottom:30px;
        }
        &:hover{
            transform:translateY(-10px);
        }
    }

@media(max-width:568px){
padding:10px;
margin:2rem 0 0 0;
    .parent{
        flex-wrap:wrap;
        justify-content:center !important;
        p{
            padding:20px 0 0 0;
        }
    }
}
`