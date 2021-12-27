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
  padding: 0 25%;
  display: flex;
  @media (max-width: ${size.tablet}) {
    padding: 0 15% 0 15%;
  }
  flex-direction: column;
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

export const BoxDepositPix = styled.div`
  &>div {
    ${device.mobileSmall} {
      padding: 10px !important;
    }
  }
`;

export const ColumnFields = styled.div`
  flex: 1;
  justify-content: space-between;
  padding: 10px 10px 25px 10px;
  @media (max-width: ${size.tablet}) {
    height: 200px;
    display: inline-block;
  }
`;

export const ColumnQrCode = styled.div`
  margin: 0 auto;
  width: fit-content;
  padding: 18px;
  align-items: center;
  border: 1px solid #D2D2D2;
  border-radius: 12px;

  ${device.mobileSmall} {
    border: none;
  }
`;

export const Item = styled.div`
  padding: 10px 0;
`;

export const ItemLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  @media (max-width: ${size.tablet}) {
    margin: 10px 0;
  }

  color: #fff0f0;
`;

export const ItemValue = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  color: #fff0f0;
  &.pix_key {
    word-break: break-word;
  }
`;

export const QrcodeText = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  @media (max-width: ${size.tablet}) {
    margin: 10px 0;
  }

  color: #ffffff;
`;

export const CounterContainer = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & .counter {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    color: #ffe1e1;
    margin: 20px 0 20px 0;
  }
  & .title {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #ffe1e1;
  }
`;

export const AnimationContainer = styled.div``;

export const BoxQrCode = styled.div`
  .info-qrcode {
    background: #F2F2F2;
    border: 1px solid #D2D2D2;

    padding: 13px 20px;
    border-radius: 10px;
    margin-top: 20px;

    p {
      margin-left: 10px;

      ${device.mobileSmall} {
        font-size: 12px;
      }
    }
  }

  .deposit-price {
    span {
      font-size: 18px;
      font-weight: 400;
    }

    p {
      font-size: 30px;
      font-weight: 700;
    }
  }

  button {
    margin: 0 auto;
    width: fit-content;
  }

  
`;

export const BoxInfoPay = styled.div`
  div {
    margin-bottom: 20px;
  }

  span {
    font-size: 18px;
    font-weight: 500;
    opacity: 0.8;

    ${device.mobileSmall} {
      font-size: 14px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 700;

    ${device.mobileSmall} {
      font-size: 16px;
    }
  }

  .pix-key {
    word-break: break-all;
  }
`;