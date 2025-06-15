import styled from "styled-components";


export const AccordionContainer = styled.section`
padding-bottom:5rem;
    .accordion_img{
        position:relative;
        width:100%;
        height:40rem;
        border-radius:15px;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:15px;
        }
        .ads{
            bottom:30px;
            width:100%;
            .ads-info{
                justify-content:space-between;
                background:#fff;
                border-radius:1rem;
                padding:0.7rem;
                width:90%;
                box-shadow:0 0 10px rgba(0,0,0,.2);
                h5{
                    font-size:1.5rem;
                    font-weight:700;
                    color:rgba(28,28,28,1);
                }
                p{
                    font-size:1.2rem;
                    color:rgba(28,28,28,.75);
                    padding:0;
                }
                button{
                    background:#5d3754;
                    color:#fff;
                    padding:1rem 1.5rem;
                    border:none;
                    border-radius:1rem;
                    font-size:1rem;
                    font-weight:700;
                    transition:all 0.7s ease;
                    a{
                        color:#fff;
                        display:block;
                        text-decoration:none;
                    }
                    &:hover{
                        background:rgb(28,28,28);
                        transform:translateY(-5px);
                    }
                }
            }
        }
    }
    @media(max-width:568px){
         .ads-info{
            justify-content:center !important;
            flex-wrap:wrap;
         }
    }
`

export const AccordionStyled = styled.div`
margin-top:3.5rem;
    span{
        font-size:18px;
        font-weight:500;
        color:#5d3754;
    }
    h1{
        font-weight:700;
        font-size:34px;
        color:#1c1c1c;
        padding-bottom:30px;
    }
    .accordion{
        .accordion-item{
            h2{
                button{
                    color:#1c1c1c;
                    font-size:1.5rem;
                    font-weight:700;
                }
                & .accordion-button:focus {
                    box-shadow: none !important;
                }
                & .accordion-button:not(.collapsed)::after {
                   filter:invert(0) brightness(.5) saturate(0) hue-rotate(0deg)
                }
            }
            .accordion-body{
                p{
                    font-size:1.2rem;
                    color:rgba(18,18,18,.7)
                }
            }
        }
    }
`