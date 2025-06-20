import styled from 'styled-components';

export const ProductsContainer = styled.section`
    .create-page{
        h2{
            color:rgb(28, 28, 28);
        }
        button{
            background: #5856d6;
            border: none;
            border-radius: 5px;
            transition: all 0.3s ease-in-out;
            &:hover{
                background: #4a4ac8;
            }
            a{
                color:#fff;
                font-size:1.1rem;
                font-weight: 500;
                padding: 10px 20px;
                text-decoration: none;
                display: block;
                text-align: center;
            }
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
    .blueBtn{
        color: #fff;
        margin:0;
        padding:0;
    }
}
    .popup{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 9999;
        display: flex;
        justify-content: center;
        align-items: center;
        .popup_parent{
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            h3{
                margin-bottom: 20px;
            }
            button{
                background: #ff3b30;
                color: #fff;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                cursor: pointer;
                &:hover{
                    background: #e60000;
                }
            }
        }
    }
`



export const ProductFormContainer = styled.div`
    .create_form{
        .product_form{
            .product_form_data{
                form{
                    .btn_submit{
                        background: #5856d6;
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
            }
        }
    
`