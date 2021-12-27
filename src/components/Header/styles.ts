import styled from "styled-components";

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

  &.not-fixed {
    position: relative !important;
  }

  ul {
    display: flex;
    list-style: none !important;
    align-items: center;
    margin-bottom: 0;

    li {
      position: relative;
      line-height:80px;
      margin-right: 30px;
      font-weight: 500;
      opacity: 0.6;

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

  .group-button {
    justify-self: end;
    line-height:80px;

    a:nth-child(2) {
      margin-left: 30px;
    }
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

