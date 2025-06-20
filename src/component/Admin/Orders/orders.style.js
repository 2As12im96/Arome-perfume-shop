import styled from "styled-components";

export const OrdersContainer = styled.section`
   .create_form{
        h2{
            color:rgb(28,28,28)
        }
        .table_actions{
            .span{
                margin:5px 5px 0 5px;
            }
            .blueBtn{
                background:#0d6efd;
                color:#fff;
                transition: all 0.7s ease;
                &:hover{
                    opacity: 0.9;
                }
            }
            .dispatched{
                background: #35D3F4;
                color: #fff;
            }
            .delivered{
                background: #6865F6;
                color: #fff;
            }
            .view{
                background: #80F140;
                color: #fff;
            }
        }
        .pending{
            color: #ffd700;
        }
        .dispatched{
            color: #35D3F4;
        }
        .delivered{
            color: #6865F6;
        }
   }
    .loader-screen{
        height: 100vh;
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        background: rgba(255,255,255,0.8);
        .spinner-border{
            width: 3rem;
            height: 3rem;
            border-width: 0.4em;
            .loader {
                width: 48px;
                height: 48px;
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
    h3{
        color:rgb(28,28,28);
        font-weight:600;
    }
    .shipping_details{
        p{
            font-size:1.2rem;
            font-weight:700;
            color:rgb(28,28,28);
            span{
                font-size:1rem;
                font-weight:500;
            }
        }
    }
`