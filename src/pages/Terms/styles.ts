import styled from "styled-components";
import { device, size } from "../../styles/device";

import {
    OtherPagesBase 
} from "../../styles/base";

export const TermsContainer = styled(OtherPagesBase)`
    a {
        font-size: 16px;
        color: ${(props) => props.theme.color.secondary};
        text-decoration: none;
        font-weight: bold;
    }
`;