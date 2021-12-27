import styled from "styled-components";
import { device, size } from "../../styles/device";
import {
  ContentBase,
  TitleContainerBase,
  ContainerBase,
} from "../../styles/base";

export const Container = styled(ContainerBase)``;

export const TitleContainer = styled(TitleContainerBase)``;

export const Content = styled(ContentBase)`
  padding: 0 15%;
  display: flex;
  @media (max-width: ${size.tablet}) {
    padding: 0 15% 0 15%;
  }
  flex-direction: column;
`;

export const ReceiptConent = styled.div`
  .atarid,
  .amount {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    .display,
    .label {
      font-family: Roboto;
      font-style: normal;
      font-size: 22px;
      line-height: 26px;
      color: #1a1736;
    }
    .label {
      font-weight: bold;
      margin-right: 4px;
    }

    span {
      font-weight: normal;
    }
  }

  .division {
    border: 1px dashed #000000;
    margin: 10px 0;
  }
`;

export const ButtonContainer = styled.div`
  padding: 20px 0;
`;

export const Row = styled.div`
  flex-direction: row;
  justify-content: center;
  @media (max-width: ${size.tablet}) {
    &.info {
      display: block;
    }
  }
`;

export const BoxDepositPixDone = styled.div`
  &>div {
    ${device.mobileSmall} {
      padding: 10px !important;
    }
  }
`;

export const BoxPixDone = styled.div`
  .info {
    span {
      font-size: 16px;
      opacity: 0.7;
      margin-bottom: 25px;

      ${device.mobileSmall} {
        font-size: 14px;
      }
    }
  
    p {
      font-size: 18px;
      font-weight: 700;

      ${device.mobileSmall} {
        font-size: 16px;
      }
    }
  }
  .token {
    p {
      font-size: 18px;
      font-weight: 700;

      ${device.mobileSmall} {
        font-size: 16px;
      }
    }
    p, span {
      opacity: 1 !important;
      font-weight: 600 !important;
    }

    span {
      ${device.mobileSmall} {
        font-size: 14px;
      }
    }
  }

  .done {
    text-align: end;

    ${device.mobileSmall} {
      text-align: center;
      margin-bottom: 20px;
    }

    svg {
      padding: 10px;
      background: #BBFFB0;
      border: 1px solid #A3F9A1;
      border-radius: 10px;
    }
  }

  .title-done {
    ${device.mobileSmall} {
      flex-direction: column-reverse;
      text-align: center;
    }

    p {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 5px;

      ${device.mobileSmall} {
        font-size: 18px;
      }
    }

    span {
      font-size: 16px;
      font-weight: 500;
      opacity: 0.6;

      ${device.mobileSmall} {
        font-size: 14px;
      }
    }
  }
`;