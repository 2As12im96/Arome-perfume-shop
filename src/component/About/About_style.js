import styled from "styled-components";

export const AboutContainer = styled.section`
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
    @media(max-width:568px){
        .breadcrumb-nav{
            padding:.8rem 0;
        }
    }
`
export const AboutContent = styled.div`
margin:5.5rem 0;
    .about-img{
        height:30rem;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:1rem;
        }
    }
    .about-info{
        margin-top:3rem;
        padding-left:3rem;
        span{
            color:#5d3754;
            font-size:1.2rem;
            font-weight:500;
        }
        h1{
            color:rgba(28,28,28,1);
            font-weight:700;
            padding-bottom:1rem;
            sup{
                font-size:1.5rem;
                top:-.7em;
            }
        }
        p{
            color:rgba(28,28,28,.75);
            font-size:1.2rem;
            font-weight:500;
        }
        button{
            margin-top:1rem;
            background:#5d3754;
            color:#fff;
            border:none;
            border-radius:1rem;
            font-size:1rem;
            font-weight:700;
            transition:all 0.7s ease;
            a{
                color:#fff;
                padding:1rem 2rem;
                display:block;
                text-decoration:none;
            }
            &:hover{
                background:rgb(28,28,28);
                transform:translateY(-5px);
            }
        }
    }
    @media(max-width:992px){
        .about-info{
            padding:0;
            margin:1.5rem 0;
        }
    }
    @media(max-width:568px){
        margin:3.8rem 0;
        .col-lg-6{
            padding:0;
        }
    }
`
export const AboutWatched = styled.section`
    margin:5rem 0;
    .about-parent-info{
        height:100%;
        .about-watched-info{
            span{
                color:#5d3754;
            }
            h1{
                color:rgba(28,28,28,1);
                font-size:2.2rem;
                font-weight:700;
            }
            p{
                color:rgba(28,28,28,.75);
                font-size:1.2rem;
                font-weight:500;
            }
            button{
                margin-top:1rem;
                background:#5d3754;
                color:#fff;
                border:none;
                border-radius:1rem;
                font-size:1rem;
                font-weight:700;
                transition:all 0.7s ease;
                a{
                    color:#fff;
                    padding:1rem 2rem;
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
    .about-watched-img{
        padding:10px;
        width:23rem;
        height:30rem;
        img{
            width:100%;
            height:100%;
            border-radius:15px;
            object-fit:cover;
        }
        &.once{
            transform:translateY(50px);
        }
    }
    @media(max-width:992px){
        .about-watched-img{
            width:100%;
            height:20rem;
            margin-bottom:1rem;
        }
    }
    @media(max-width:568px){
        .parentRow{
            flex-direction:column-reverse;
            .about-parent-info{
                margin-top:4rem;
            }
        }
    }

`

export const CounterContainer = styled.div`
    margin:5rem 0;
    .counter-info{
        text-align:center;
        h1{
            font-size:2.5rem;
            font-weight:700;
            color:rgba(28,28,28,1);
        }
        p{
            font-size:1.2rem;
            color:rgba(28,28,28,.75);
            font-weight:500;
        }
    }
    .counter-img{
        margin-top:3rem;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
        }
    }
    @media(max-width:992px){
        .counter-info{
            h1{
                font-size:1.8rem;
            }
        }
    }
`

