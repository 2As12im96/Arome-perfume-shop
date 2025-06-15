import styled from "styled-components";

export const AsidebarContainer = styled.aside`
    padding:1rem 0;
    height:75vh;
    border-right: 1px solid #6f6b80;
    h3{
        color:rgba(28,28,28,1);
        font-weight:700;
    }
    ul{
        a{
            color:rgb(28,28,28);
            font-size:1.2rem;
            text-decoration:none;
            padding:1px 0; 
            li{
                span{
                    margin:-5px 0 0 10px;
                }
                svg{
                    margin:0 5px 0 10px;
                }
            }
            &.active{
                color:#5856d6;
                border-left:2px solid #5856d6
            }
        }
    }
    @media(max-width:992px){
        display:none;
        &.active{
            display:block;
            width:100%;
            height:100vh;
            position:fixed;
            left:0;
            z-index:1062;
            background:#fff;
        }
    }
`