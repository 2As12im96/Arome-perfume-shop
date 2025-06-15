import styled from "styled-components";

export const ContactContainer = styled.section`
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
    .contact-form{
        form{
            span{
                display:block;
                margin:2rem 0;
                &:nth-child(1){
                    margin:0 0 1rem 0;
                }
                input:focus , textarea:focus{
                    box-shadow:0 3px 8px #5d3745;
                    border:1px solid #5d3745;
                }
                textarea{
                    height:13rem;
                }
            }
            button{
                width:9rem;
                margin:1rem 0 6rem 0;
                padding:10px;
                background:#5d3745;
                border:none;
                color:#fff;
                transition:all 0.7s ease;
                &:hover{
                    background:rgba(28,28,28,1);
                    transform:translateY(-5px);
                }
            }
        }
    }
    .contact-details{
        color:rgba(28,28,28,1);
        h1{
            font-weight:700;
        }
        p{
            font-size:1.2rem;
            color:rgba(28,28,28,.75);
            margin:1rem 0;
        }
        .text-parent{
            margin:1rem 0;
            strong{
                font-size:1.5rem;
            }
        }
    }
    .contact-map{
        margin-bottom:3rem;
        iframe{
            width:100%;
        }
    }
    @media(max-width:568px){
        .breadcrumb-nav{
            padding:.8rem 0;
        }
        .container{
            .row{
                flex-direction:column-reverse;
            }
        }
    }
`