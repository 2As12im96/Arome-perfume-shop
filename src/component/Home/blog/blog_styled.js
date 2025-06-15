import styled from "styled-components";

export const BlogELement = styled.section`
margin:2rem 0;
    .blog-title{
        span{
            color:#5d3754;
            font-size:18px;
        }
        h4{
            font-size:2rem;
            font-weight:700;
        }
    }
    .card{
        border:none;
        border-radius:20px;
        cursor:pointer;
        margin:3rem 0;
        transition:all 0.7s ease;
        .card-img{
            width:420px;
            height:280px;
            border-radius:20px;
            overflow:hidden;
            img{
                width:100%;
                height:100%;
                object-fit:cover;
                opacity:0.9;
                border-radius:20px;
                transition:all 0.7s ease;
            }
        }
        &:hover .card-img img{
            transform:scale(1.1);
            opacity:1;
        }
        .card-body{
            .card-icons{
                span{
                    padding-left:10px;
                    color:rgba(28, 28, 28, 0.75);
                    svg{
                        color:rgba(28, 28, 28, 0.75);
                    }
                    
                }
            }
            .card-text{
                h5{
                    font-size:1.5rem;
                    font-weight:700;
                    margin:10px 0;
                    transition:all 0.7s ease;
                    a{
                        color:rgba(28,28,28,1);
                        text-decoration:none;
                        transition:all 0.7s ease;
                    }
                    &:hover a{
                        color:#5d3754;
                    }
                }
            }
        }
    }
@media(max-width:992px){
    .card{
        margin:2rem 0;
        .card-img{
            width:100%;
            height:100%;
        }
    }
}
`