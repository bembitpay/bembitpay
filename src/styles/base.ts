import styled from "styled-components";
import { device } from "./device";

export const ContainerBase = styled.div`
  flex: 1;
`;

export const TitleContainerBase = styled.div`
  flex: 2;
  align-items: center;
  flex-direction: column;
  display: flex;
`;

export const ContentBase = styled.div`
  flex: 14;
  padding: 0 15%;
  ${device.mobileSmall} {
    padding: 0 15%;
  }
  ${device.mobileMedium} {
    padding: 0 10%;
  }
  ${device.Tablet} {
    padding: 0 15%;
  }
  ${device.Desktop} {
    padding: 0 25%;
  }
`;

export const OtherPagesBase = styled.section`
    margin-top: 80px;

    h5 {
        font-size: 20px;
    }

    p {
        color: #171923;
        font-size: 16px;
        line-height: 24px;
    }

    .hero-info {
        color: #fff ;
        padding: 60px 0;
        background: linear-gradient(93.98deg, #273176 3.25%, #091041 96.75%);
        margin-bottom: 60px;
        
        p {
            color: #fff ;
            font-size: 16px;
            line-height: 24px;
        }
    }
`;