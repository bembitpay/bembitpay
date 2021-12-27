import styled from "styled-components";

import { device, size } from "../../styles/device";

export const Accordion = styled.div`
    .accordion-item { 
        border: none;
        border-bottom: 1px solid rgba(34, 34, 34, 0.2);
        padding: 30px 0;
        cursor: pointer;
        
        &.open {

            h4 {
                color: ${(props) => props.theme.color.secondary} !important;
            }

            svg {
                transform: rotate(45deg);
                fill: #F02C5E;
            }
        }

        p {
            margin-top: 10px;
        }

        ${device.mobileSmall} {
            padding: 10px;
        }
    }
`;