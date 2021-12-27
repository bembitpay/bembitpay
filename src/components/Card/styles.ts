import styled from "styled-components";

import { device, size } from "../../styles/device";

export const Card = styled.div`
  position: relative;
  max-width: 460px;
  background: #FFFFFF;
  border: 1px solid #D2D2D2;
  border-radius: 10px;
  /* padding: 25px; */
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${(props) => props.theme.color.secondary};

  }

  p {
    margin-bottom: 0;
  }

  .title-card {
    padding: 10px;
    border-bottom: 1px solid #D2D2D2; 
  }

  .box-card {
    padding: 10px 25px;

    ${device.mobileSmall} {
      padding: 0 15px 5px 15px;
    }
  }
`;
