import styled from "styled-components";

export const CheckoutSuccessContainer = styled.section`
    margin:5rem auto;
        .success_icon{
            background:#4CB200;
            width: 5rem;
            height: 5rem;
            padding: 50px;
            i{
                font-size:4.5rem;
                color:#fff
            }
        }
        .failed_icon{
            background:#f00;
            width: 5rem;
            height: 5rem;
            padding: 50px;
            span{
                font-size:5rem;
                font-weight: 700;
                color:#fff;
            }
        }
        p{
            font-size:3rem;
        }
        .title_success{
            color:#4CB200;
        }
        .title_failed{
            color:#f00;
        }
        .message_text{
            color: #AEA8A6;
            font-size: 2.5rem;
        }
        .btn_click{
            margin:1rem 0;   
            button{
                width: 9rem;
                padding: 10px;
                border:none;
                font: {
                    size: 1.2rem;
                    weight: 700;
                }
                color: #fff;
            }
            .btn_success{
                background: #4CB200;
            }
            .btn_failed{
                background: #f00;
            }
        }
`