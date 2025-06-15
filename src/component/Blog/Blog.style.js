import styled from "styled-components";

export const BlogContainer = styled.section`
    .breadcrumb-nav {
        margin-top: 6rem;
        background: #5D3754;
        width: 100%;
        padding: 3rem 0;
        .breadcrumb {
            display: flex;
            flex-wrap: wrap;
            padding: 0 0;
            margin-bottom: 1rem;
            list-style: none;
            .breadcrumb-item {
                color: rgba(255, 255, 255, 0.7);
                font-size: 1.1rem;
                font-weight: 500;
                a{
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                }
                &::before {
                    color: rgba(255, 255, 255, 0.7);
                }   
            }
        }
    }
    .parent{
        margin:6rem 0;
        a{
            text-decoration: none;
        }
        .card{
            background: #fff;
            border-radius: .8rem;
            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
            margin-bottom: 2rem;
            cursor:pointer;
            .card-img{
                img{
                    border-radius: 1rem 1rem 0 0;
                }
            }
            .card-info{
                .card-icons{
                    margin:1rem 0;
                    span{
                        display: flex;
                        align-items: center;
                        font-size: 1rem;
                        color: rgba(28,28,28,.7);
                        margin-right: .8rem;
                        svg{
                            margin-right: .5rem;
                        }
                    }
                }
                .card-text{
                    h5{
                        a{
                            font-size: 1.3rem;
                            font-weight: 600;
                            color: rgba(28,28,28,1);
                            margin-bottom: 1rem;
                        }
                    }
                    p{
                        font-size: 1rem;
                        color: rgba(28,28,28,.7);
                         
                        padding:0;
                    }
                    .read{
                        color:#fff;
                        font-size: 1rem;
                        font-weight: bold;
                        width:12rem;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        background: #5D3754;
                        padding: 1rem;
                        border-radius: 1rem;
                        margin-top: 1rem;
                        text-decoration: none;
                        transition: all .3s ease-in-out;
                        &:hover{
                            background: rgba(28,28,28,1);
                            box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
                            transform: translateY(-4px);
                        } 
                    }
                }
            }
        }
    }
@media (max-width: 568px) {
    .breadcrumb-nav {
        padding: .8rem 0;
    }
}    
`

export const BlogSpotContainer = styled.section`
    .parent{
        margin-top:6rem;
        padding:3rem 0;
        .card{
            .card-img{
                width:100%;
                img{
                    width:100%;
                    height: 30rem;
                    object-fit: cover;
                    border-radius: 1rem;
                }
            }
            .card-info{
                padding: 2rem;
                .card-icons{
                    margin:1rem 0;
                    span{
                        display: flex;
                        align-items: center;
                        font-size: 1rem;
                        color: rgba(28,28,28,.7);
                        margin-right: .8rem;
                        svg{
                            margin-right: .5rem;
                        }
                    }
                }
                .card-text{
                    h5{
                        font-size: 2rem;
                        font-weight: 600;
                        color: rgba(28,28,28,1);
                        margin-bottom: 1rem;
                    }
                    p{
                        font-size: 1.3rem;
                        color: rgba(28,28,28,.7);
                         
                        padding:0;
                    }
                }
            }
        }
    }
`