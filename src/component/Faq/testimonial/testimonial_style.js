import styled from "styled-components";

export const TestimonialContainer = styled.section`
margin-top: 5rem;
display: flex;
justify-content: center;
margin:10rem 0;
    h5{
        color:rgba(28,28,28,1);
        font-size:2rem;
        font-weight:700;
        margin:.5rem 0;
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
    .card-img{
        width:8rem;
        height:8rem;
        
    }
    
    }
    @media(max-width:568px){
        margin:0;
        h5{
            font-size:1.8rem;
        }
    }
`




