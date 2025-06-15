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
        .card-body{
            .text{
                color:rgba(28,28,28,0.7);
                font-size:1.2rem;
            }
            .card-stars{
                & :nth-child(1){
                    padding-left:0;
                }
                svg{
                    color:#5d3754;
                    font-size:.5rem;
                    padding-left:10px;
                }
            }
        }
    }
    .heading{
        font-size:2rem;
        margin:.8rem 0;
    }
    .team{
        color:#5d3754;
    }
    .card-img{
        width:100%;
        height:100%;
        overflow:hidden;
        img{
            border-radius:15px;
            transition: all .3s ease-in-out;
        }
        &:hover{
            img{
                transform:scale(1.1);
            }
        }
    }
    .card-text{ 
        padding: 0;
        position: relative;
        bottom: 0;
        background-color: rgb(255 255 255 / 69%);
        width: 100%;
        backdrop-filter: blur(8px);
        text-align: left;
        transition: .3s;
        padding-right: 0;
        padding-top: 30px;
        text-align: center;
        padding-bottom: 30px;
        border-radius: 15px;
        margin-top: 0;
        top: -42px;
        border-radius: 15px;
        width: 93%;
        margin: 0 auto;
        span{
            background:#5d3754;
            width:2.5rem;
            height:2.5rem;
            transition: all .3s ease-in-out;
            svg{
                color:#fff;
            }
            &:hover{
                transform:translateY(-5px);
            }
        }
        h6{
            font-size:1.5rem;
            font-weight:700;
            color:rgba(28,28,28,1);
        }
        p{
            font-size:1.2rem;
            color:rgba(28,28,28,.7);
        }
    }
    @media(max-width:568px){
        margin:0;
        h5{
            font-size:1.8rem;
        }
    }
`
