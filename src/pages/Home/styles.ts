import styled, { keyframes } from "styled-components";
import { device, size } from "../../styles/device";
import {
  ContentBase,
  TitleContainerBase,
  ContainerBase,
} from "../../styles/base";

export const Container = styled(ContainerBase)``;

export const TitleContainer = styled(TitleContainerBase)``


export const Content = styled(ContentBase)`
  padding: 0 25%;
  display: flex;
  ${device.mobileSmall} {
    padding: 0 15%;
  }
  ${device.mobileMedium} {
    padding: 0 10%;
  }
  ${device.Tablet} {
    padding: 0 15%;
  }
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 58px;
  line-height: 125%;
  color: ${(props) => props.theme.color.primary};

  &+p {
    opacity: 0.6;
  }

  span {
    font-size: 100%;
    color: ${(props) => props.theme.color.orange};
    font-weight: bold;
  }

  ${device.mobileSmall} {
    font-size: 48px !important;
  }
`;

export const Link = styled.a`
  width: fit-content;
  text-decoration: none;
  font-weight: 500;
  border-radius: 4px;
  color: ${(props) => props.theme.color.secondary};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.color.secondary};
    opacity: 0.6;
  }
  
  &.a-primary {
    padding: 12px 30px;
    color: ${(props) => props.theme.color.text_white};
    background: ${(props) => props.theme.color.secondary};
  }
`;

export const Card = styled.div`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 10px 10px 25px rgba(221, 221, 221, 0.9);
  border-radius: 5px;
  padding: 25px;
`;

export const ReceitContent = styled.div`
  .atarid,
  .amount {
    display: flex;
    flex-direction: row;
    margin: 10px 0;
    .display {
      font-family: Roboto;
      font-style: normal;
      font-size: 22px;
      line-height: 26px;
      color: #1a1736;
      &:hover {
        text-decoration: underline;
      }
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

export const ContainerButton = styled.div`
  padding: 10px 5% 10px 5%;
`;

export const HeroContainer = styled.section`
  background: #fafafa;
  padding-top: 120px;
  padding-bottom: 140px;

  ${device.mobileSmall} {
    padding-top: 50px;
  }

  .numbers-info {
    margin-top: 50px;

    div {
      margin-right: 20px;
    }

    span {
      font-size: 20px;
      font-weight: 500;
      color: ${(props) => props.theme.color.primary};

      margin-right: 5px;
    }

    p {
      margin-bottom: 0;
      color: ${(props) => props.theme.color.primary};
      opacity: 0.8;
    }

    ${device.mobileSmall} {
      margin-bottom: 30px;
      margin-top: 20px;
    }
  }
`;

export const HowToUseContainer = styled.section`
  position: relative;
  top: -70px;
  .box-to-use {
    background: #fff;

    border: 1px solid #C8C8C8;
    border-radius: 10px;

    padding: 30px;

    p {
      margin-bottom: 60px;
    }

    ${device.mobileSmall} {
      margin-bottom: 20px;
    }
  }
`;

const Marquee = keyframes`
  0% {
    transform: translateX(0%);
  }

  100% {
    transform: translateX(calc(-180px * 2));
  }

`;

export const CapTokenCointainer = styled.section`
  overflow-x: hidden;
  background: linear-gradient(93.98deg, #273176 3.25%, #091041 96.75%);

  padding: 40px 0;

  br {
    ${device.mobileSmall} {
      display: none;
    }
  }

  .token-list {
    width: 100%;
    height: 100px;
    overflow: hidden;
    position: relative;
    margin: auto;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 180px;
      height: 100px;
      background: linear-gradient(90deg, #273176 0%, rgba(39, 49, 118, 0) 100%);
      z-index: 99;
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      width: 180px;
      height: 100px;
      background: linear-gradient(90deg, rgba(10, 17, 65, 0) 0%, #0A1141 100%);
      z-index: 99;
    }

    .token-track {
      display: flex;
      width: calc(180px * 14);
      animation: ${Marquee} 10s infinite linear;

      &:hover {
        animation-play-state: paused;
      }

      .token {
        width: 180px;
        color: white;
        
        padding: 5px 9px;

        &>div {
          border-radius: 100px;
          padding: 5px 15px;
          border: 1px solid rgba(236, 236, 236, 0.1);
        }

        p {
          margin-bottom: 0;
          font-size: 18px;
        }

        span {
          color: ${(props) => props.theme.color.text_white};
          font-size: 12px;
          margin-left: 20px;
        }
      }
    }


  }
`;


export const SocialMediaContainer = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;

  .box-social:nth-child(1) {
    margin-bottom: 00px;

    ${device.mobileSmall} {
      margin-bottom: 20px;
    }
  }

  .box-social {
    background: #fff;
  
    border: 1px solid #C8C8C8;
    border-radius: 20px; 
    
    padding: 30px;

    height: 350px;
    transition: all 0.2s linear;

    ${device.mobileSmall} {
      border-radius: 10px;
      height: 200px;
      padding: 20px;
    }


    &.big {
      height: 100%;

      ${device.mobileSmall} {
        height: 400px;
      }
    }

    &:hover {
      transform: translateY(-10px);
      filter: drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.05));
      border: 1px solid #EBEBEB;
    }
  }
`;

export const NewsletterContainer = styled.section`
  padding-top: 20px;
  padding-bottom: 20px;
  background: linear-gradient(97.83deg, #273176 0%, #091041 100%);

  br {
    ${device.mobileSmall} {
      display: none;
    }
  }

  .container {
    ${device.mobileSmall} {
      padding: 0 5%;
    }
  }

  label {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 15px;
  }

  .newsletter-group {
    height: 50px;
    
    input {
      width: 70%;
      height: 100%;
      background: rgba(255, 255, 255, 0.19);
      border-radius: 6px 0 0 6px;
      color: ${(props) => props.theme.color.text_white};
      border: none;
      font-size: 18px;
      font-weight: 600;
      padding: 16px;
    }

    button {
      background: ${(props) => props.theme.color.secondary};
      padding: 10px 20px;
      height: 100%;
      border: none;
      border-radius: 0 6px 6px 0; 
    }
  }


`;

export const FaqContainer = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;

  h2 {
    ${device.mobileSmall} {
      margin-bottom: 20px;
    }
  }
`;
  