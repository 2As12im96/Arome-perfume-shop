import styled from "styled-components";

export const CreateProductContainer = styled.section`
    .product_form_data{
        p{
            font-size:2.5rem;
            font-weight:700;
            color:rgb(28,28,28);
        }
        form{
            label{
                display:block;
                width:100%;
                color:rgb(28,28,28);
                font-size:1.2rem;
                font-weight:700;
                cursor:pointer;
            }
            span{
                display:block;
                width:100%;
                margin:0;
                color:rgb(28,28,28);
                font-weight:700;
                font-size:1.2rem;
            }
            & .imghover{
                margin:0;
            }
            input{
                margin:2rem 0;
                &[type = 'submit']{
                    color:#fff;
                    font-size:1.2rem;
                    font-weight:700;
                    width:100%;
                    height:100%;
                    border:none;
                }
            }
            .submit_btn{
                background:#5856d6;
                margin:0;
                width:12rem;
                height:3rem;
                transition:all 0.7s ease;
                &.active{
                    opacity:.5;
                    cursor:not-allowed;
                }
                &:hover{
                    background:rgb(28,28,28);
                }
            }
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
    .product_form_img{
        border:1px solid #dddddd;
        height:60vh;
        width:100%;
        p{
            color:rgb(28,28,28);
            font-size:1.1rem;
        }
    }
    @media(max-width:568px){
        position:relative;
        .reverse{
            flex-direction:column-reverse;
            .product_form_data{
                p{
                    position:absolute;
                    top:0;
                    left:0;
                    text-align:center;
                    width:100%;
                }
            }
        }
    }
`
