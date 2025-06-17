import styled from "styled-components";

export const NavAdminContainer = styled.nav`
    font-size:16px;
    width:100%;
    box-shadow:0 5px 10px rgba(28,28,28,.7);
    .parent{
        .links{
            li{
                margin-left:1.5rem ;
                cursor:pointer;
                font-size:1.2rem;
                color:rgb(28,28,28);
                img{
                    width:2rem;
                    height:2rem;
                }
                button{
                    background:#5856d6;
                    color:#fff;
                }
                svg{
                    font-size:1.5rem;
                }
                &.menuIcon , &.user{
                    display:none;
                }
                a{
                    text-decoration:none;
                    color:rgb(28,28,28);
                }
            }
            & li:nth-child(3){
                width:2rem;
                height:2rem;
            }
        }
    }
    @media(max-width:992px){
        .parent{
            .links{
                li{
                    margin:0;
                    &.menuIcon , &.user{
                        display:block;
                        svg{
                            color:rgba(28,28,28,1);
                        }
                    }
                    &.pageLinks{
                        display:none;
                    }
                }
            }
        }
    }
`