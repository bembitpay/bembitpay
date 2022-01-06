import styled from "styled-components";

import { device, size } from "../../styles/device";

export const Card = styled.div`
  position: relative;
  max-width: 460px;
  background: #FFFFFF;
  border: 1px solid #D2D2D2;
  border-radius: 10px;
  -moz-clip-path: inset(  0 0 -100vw 0 );
  -webkit-clip-path: inset( 0 0 -100vw 0 );
  clip-path: inset( 0 0 -100vw 0 );

  p {
    margin-bottom: 0;
  }

  .title-card {
    padding: 15px 0 5px 0;
    border-bottom: 1px solid #D2D2D2; 
  }

  .box-card {
    padding: 10px 25px;

    ${device.mobileSmall} {
      padding: 0 15px 5px 15px;
    }
  }
`;
