import styled from "styled-components";

export const RegisterContainer = styled.section`
    .text{
        font-size:1.2rem;
        color:rgba(28,28,28,.7)
    }
    form{
        .form-group{
            label{
                font-size: 1.2rem;
                color: rgba(28,28,28,1);
            }
            .links{
                a{
                    color: #5d3745;
                    text-decoration: none;
                    &:hover{
                        text-decoration: underline;
                    }
                }
            }
            input[type="checkbox"]{
                accent-color:#5d3745;
            }
            .aye{
                right:15px;
                bottom:7px;
                cursor: pointer;
            }
        }
        input[type="submit"]{
            background: #5d3745;
            font-size: 1.2rem;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            &:hover{
                background-color: rgba(28,28,28,1);
            }
        }
        .forgot{
            color: #5d3745;
            font-size:1.2rem;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    .change-page{
        font-size:1.2rem;
        color:rgba(28,28,28,.7);
        a{
            color: #5d3745;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    .googleBtn{
        border: none;
        height: 60px;
        margin:1rem auto;
        img{
            width:100%;
            height:100%;
            object-fit: cover;
        }
    }
    .space{
        font-size:1.2rem;
        color:rgba(28,28,28,.7);
    }
    .invalid{
        border: 1px solid red;
    }
`