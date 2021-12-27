import styled from "styled-components";
import { device, size } from "../../styles/device";
import {
  ContentBase,
  TitleContainerBase,
  ContainerBase,
} from "../../styles/base";

export const Container = styled(ContainerBase)`
  .box-datas {
    padding: 10px 25px;

    ${device.mobileSmall} {
      padding: 2px 15px 20px 15px !important;
    }
  }
`;

export const TitleContainer = styled(TitleContainerBase)``;

export const Content = styled(ContentBase)`
  padding: 0 15%;
  display: flex;
  ${device.Tablet} {
    padding: 0 15% 0 15%;
  }
  ${device.mobileSmall} {
    padding: 0 15% 0 15%;
  }

  ${device.mobileMedium} {
    padding: 0 7% 0 7%;
  }
  flex-direction: column;
`;

export const Row = styled.div`
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${size.tablet}) {
    &.info {
      display: block;
    }
  }
`;

export const ColumnFields = styled.div`
  flex: 1;
  justify-content: space-between;
  padding: 10px 10px 100px 10px;
  @media (max-width: ${size.tablet}) {
    height: 200px;
    display: inline-block;
  }
`;

export const ColumnQrCode = styled.div`
  flex: 1;
  padding: 10px;
  align-items: center;
  @media (max-width: ${size.tablet}) {
    height: 300px;
  }
`;

export const Item = styled.div`
  flex-direction: row;
`;

export const ItemLabel = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 26px;
  @media (max-width: ${size.tablet}) {
    margin: 10px 0;
  }

  color: #fff0f0;
`;

export const ItemValue = styled.div`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;

  color: #fff0f0;
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

export const ContainerButton = styled.div`
  margin: 50px 0;
`;

export const AnimationContainer = styled.div``;

export const ReceitContent = styled.div`
  padding: 30px 0;
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
  .warning {
    text-align: center;
    text-transform: uppercase;
    color: red;
  }
  ${device.mobileMedium} {
    .atarid,
    .amount {
      .display,
      .label {
        font-size: 18px;
      }
    }
  }
`;

export const ButtonBack = styled.a`
  margin: 10px 0;
  font-size: 18px;
  color: #ef9d1c;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const DatasContainer = styled.div`
  background: #F8F8F8;
  padding: 30px 60px;

  .content-datas {
    margin: 0 auto;
    max-width: 400px;
  }

  ${device.mobileSmall} {

    padding: 40px 20px;
  }
`;

export const InfoContainer = styled.div`
  max-width: 800px;
  padding: 30px 0;

  ${device.mobileSmall} {
    margin-top: 20px;
    padding: 10px 20px;
  }

  .info-token {
    hr {
      opacity: 0.2;
    }

    span {
      font-weight: 600;
      font-size: 16px;
      margin-bottom: 10px;
    }

    p {
      font-weight: 600;
      font-size: 20px;
    }
  }

  .info-wallet {
    padding-top: 20px;
    padding-bottom: 10px;
    span {
      font-size: 16px;
      opacity: 0.7;
    }

    p {
      font-weight: 600;
      font-size: 20px;
      margin-top: 10px;
      word-break: break-all;
    }
    
  }

  .value-pay {
    span {
      font-weight: 400;
      font-size: 18px;
      opacity: 0.8;
    }

    p {
      font-weight: 600;
      font-size: 20px;
    }

    .total {
      p {
        font-size: 24px;
      }
    }
  }
`;
