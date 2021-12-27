import styled from "styled-components";

import { device, size } from "../../styles/device";

export const FooterContainer = styled.footer`
    background: #FAFAFA;
    padding: 40px 0px;

    p {
        font-size: 16px;
        font-weight: 600;
    }

    
    .footer-1 {
        margin-bottom: 20px;

        .newsletter {
            height: 45px;

            p {
                font-weight:400;
                font-size: 14px;
            }
        
            input {
                width: 100%;
                height: 100%;
                border: 1px solid #D2D2D2;
                border-radius: 6px 0 0 6px;
                color: ${(props) => props.theme.color.text_black};
                background: none;
                font-size: 16px;
                font-weight: 500;
                padding: 16px;
            }
    
            button {
                display: flex;
                align-items: center;
                justify-content: center;
                background: ${(props) => props.theme.color.secondary};
                padding: 0 15px;
                border: none;
                border-radius: 0 6px 6px 0; 
            }
        }
    }

    .footer-2 {
        margin-top: 20px;

        img {
            width: 120px;
            margin-right: 30px;
        }

        a {
            color: ${(props) => props.theme.color.text_black};
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;
            opacity: 0.6;
            margin-right: 40px;
        }   

        a:hover {
            opacity: 1;
        }
    }

    .footer-3 {
        margin-top: 30px;

        p {
            font-weight: 400;
        }

        span {
            font-weight: 600;
        }
    }
`;

export const LinksContent = styled.div`

    ul {
        list-style: none !important;
        padding-left: 0;

        a {
            font-size: 12px;
            font-weight: 500;
            text-decoration: none;
            margin-bottom: 10px;
            opacity: 0.5;

            &:hover {
                opacity: 1;
                font-weight: 600;
            }
        }
    }
`;