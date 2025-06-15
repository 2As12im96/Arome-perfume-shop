import styled from "styled-components";

export const Partation = styled.section`
padding:6rem 0;
position:relative;
    a{
        text-decoration:none;
        .cart{
            transition:all 0.7s ease;
            &:hover .card-img img{
                transform:scale(1.3,1.3);
            }
            .card-img{
                height:330px;
                border-radius:15px;
                overflow:hidden;
                transition:all 0.7s ease;
                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                    transition:all 0.7s ease;
                }
            }
            .card-info{
                padding:10px 0;
                h4{
                    color:rgba(28,28,28,1);
                    font-weight:700;
                }
                p{
                    color:#5d3754;
                }
            }
        }
    }
@media(max-width:992px){
    a{
        .cart{
            .card-img{
                height:170px;
            }
        }
    }
}
@media(max-width:540px){
    .col-sm-6{
        width:50%;
    }
}
`
export const Button = styled.button`
background:#5d3754;
border-radius:10px;
border:1px solid #5d3754;
width:9rem;
margin:20px 0;
transition:all 0.7s ease;
    &:hover{
        background:rgba(28,28,28,1);
        transform:translateY(-10px);
    }
    a{
        color:#fff;
        display:block;
        padding:10px;
        font-size:16px;
        font-weight:700;
    }
`