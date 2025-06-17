import styled from "styled-components";

export  const AuthContainer = styled.div`
    background: #5856d6;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
    .admin-img{
        img{
            filter: invert(1);
            height: 70px;
            object-fit: cover;
        }
    }
    .admin-form{
        padding: 20px;
        padding-left: 50px;
        border-left:1px solid #fff;
        p{
            font-size: 1.2rem;
            margin-bottom: 20px;
        }
        form{
            .form-group{
                font-size: 1.2rem;
                span{
                    .aye{
                        color:rgba(28,28,28,1);
                        right:5px;
                        bottom:5px;
                        font-size:1rem;
                        cursor: pointer;
                    }
                }
                .msg-err{
                    padding:0;
                    margin: 0;
                }
            }
            .submit{
                font-size:1.2rem;
                .loader {
                width: 38px;
                height: 38px;
                border-radius: 50%;
                display: inline-block;
                position: relative;
                border: 3px solid;
                border-color: #FFF #FFF transparent transparent;
                box-sizing: border-box;
                animation: rotation 1s linear infinite;
                }
                .loader::after,
                .loader::before {
                    content: '';  
                    box-sizing: border-box;
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    margin: auto;
                    border: 3px solid;
                    border-color: transparent transparent #4a4ac8 #4a4ac8;
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    box-sizing: border-box;
                    animation: rotationBack 0.5s linear infinite;
                    transform-origin: center center;
                }
                .loader::before {
                    width: 32px;
                    height: 32px;
                    border-color: #FFF #FFF transparent transparent;
                    animation: rotation 1.5s linear infinite;
                }
                @keyframes rotation {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(360deg);
                    }
                } 
                @keyframes rotationBack {
                    0% {
                        transform: rotate(0deg);
                    }
                    100% {
                        transform: rotate(-360deg);
                    }
                }
            }
        }
        .auth-link{
            font-size:1.3rem;
            font-weight:500;
            span{
                color:rgba(28,28,28,.7);
            }
            a{
                color:#fff;
                text-decoration:none;
                &:hover{
                    text-decoration:underline;
                }
            }
        }
    }
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    @media (max-width: 560px) {
        font-size: 1.2rem;
        .admin-form{
            margin-top: 20px;
            padding: 30px 0 0 0;
            border-top:1px solid #fff;
            border-left:none;
        }
    }
`