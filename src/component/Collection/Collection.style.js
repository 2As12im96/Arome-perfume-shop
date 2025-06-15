import styled from "styled-components";

export const CollectionContainer = styled.section`
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
    h1{
        font-weight:600;
        color:rgba(28,28,28,1);
        margin:2rem 0;
    }
    a{
        text-decoration:none;
    }
    .collection-item{
        .collection-img{
            overflow:hidden;
        }
        img{
            transition:all 0.7s ease;
        }
        &:hover img{
            transform:scale(1.3);
        }
        h2{
            color:rgba(28,28,28,1);
            font-size:1.3rem;
            font-weight:700;
        }
        p{
            color:#5d3745;
            font-size:1.1rem;
        }
    }
    @media(max-width:568px){
        .breadcrumb-nav{
            padding:.8rem 0;
        }
    }
`