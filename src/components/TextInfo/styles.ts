import styled from "styled-components";

import { device, size } from "../../styles/device";

export const TextInfo = styled.div` 
  margin-bottom: 20px !important;

  span {
    display: block;
    
    font-size: 18px;
    color: ${(props) => props.theme.color.gray4};

    margin-bottom: 10px !important;
  }

  strong {
    font-size: 18px;
    color: ${(props) => props.theme.color.gray5};
    word-break: break-word;
  }
`;
