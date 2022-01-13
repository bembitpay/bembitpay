import styled, { keyframes } from "styled-components";

import { device, size } from "../../styles/device";

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: #fff;

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);

  
  padding: 0 20px; 

  ${device.mobileSmall} {
    padding: 20px;
  }

  &.not-fixed {
    position: relative !important;

    .group-button {
      line-height:80px;
    }
  }

  ul {
    display: flex;
    list-style: none !important;
    align-items: center;
    margin-bottom: 0;
    transition: transform 0.2s linear;

    ${device.mobileSmall} {
      position: absolute;
      top: 70px;
      left: 0;
      width: 100%;
      height: calc(100vh - 70px);
      background: #fff;
      flex-direction: column;
      align-items: start;
      padding-left: 20px !important;
      display: none;
      
      
      &.view-menu {
        display: flex;

      }

      li {
        /* color: #fff !important; */
        font-size: 20px;
        line-height: 60px !important;
        
        &:before {
          display: none;
        }
      }
    }

    a {
      text-decoration: none;
    }

    li {
      position: relative;
      line-height:80px;
      margin-right: 30px;
      font-weight: 500;
      opacity: 0.6;
      cursor: pointer !important;

      &:before {
        content: "";
        position: absolute;
        top: -2.5px;
        left: 50%;
        transform: translate(-50%, 0);
        width: 0px;
        background: ${(props) => props.theme.color.primary};
        height: 5px;
        border-radius: 100px;
        transition: width 0.2s linear;
      }

      &:hover {
        opacity: 1;
        color: ${(props) => props.theme.color.primary};

        &:before {
          width: 100%;
        }
      }
    }
  }

  img, .icon-menu {
    z-index: 99;
  }

  .group-button {
    
    justify-self: end;

    a:nth-child(2) {
      margin-left: 30px;
    }

    ${device.mobileSmall} {
      width: 100%;
      padding-top: 20px;
    }
  }
`;

export const Link = styled.a`
  width: fit-content;
  text-decoration: none;
  font-weight: 500;
  border-radius: 4px;
  color: ${(props) => props.theme.color.secondary};
  cursor: pointer !important;

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

