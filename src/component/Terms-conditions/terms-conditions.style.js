import styled from "styled-components";

export const TermsConditionContainer = styled.section`
    margin-bottom:5rem;
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
    .text-parent{
        margin:3rem 0 2rem 0;
        h1{
            font-weight:700;
            margin-bottom:3rem;
            color:rgba(28,28,28,1);
        }
        p{
            color:rgba(28,28,28,.7);
            font-size:1.1rem;
        }
        & p:nth-child(2){
            margin-bottom:2rem;
        }
    }
    .child{
        margin:1.5rem 0;
        h4{
            font-weight:700;
            color:rgba(28,28,28,1);
            margin-bottom:1rem;
        }
        p{
            color:rgba(28,28,28,.7);
            font-size:1.1rem;
        }
    }
    @media(max-width:568px){
        .breadcrumb-nav{
            padding:.8rem 0;
        }
    }
`