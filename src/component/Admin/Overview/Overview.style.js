import styled from "styled-components";

export const OverviewContainer = styled.section`
    .summary_overview{
        background: #31314D;
        padding:15px;
        h2{
            color:#D4D5EC;
        }
        p{
            color: #A0A2BD;
            padding-bottom:20px;
        }
        .parent_icons{
            .child_icon{
                .icon_bx{
                    margin-right:5px;
                    width: 60px;
                    height: 70px;
                }
                .icon_data{
                    .icon_member{
                        font-size:2rem;
                        weight:700;
                        color:#D4D5EC;
                    }
                    .icon_name{
                        color: #A0A2BD;
                        margin-top:-10px;
                        font-size:1rem;
                    }
                }
                .icon_presentage{
                    margin-left: 5px;
                    span{
                        font-size:1.5rem;
                        font-weight:700;   
                    }
                }
            }
        }
    }
    .latest_orders{
        background: #31314D;
        padding: 15px;
        margin:10px 0;
        h5{
            color: #D4D5EC;
            font-size:1.6rem;
        }
        .member{
            background:#266cff1f;
            padding: 0.5rem;
            margin-top:1rem;
            span{
                color: #D4D5EC;
            }
        }  
        .ch_color{
            background: #2B3D56;
        }  
    }

`