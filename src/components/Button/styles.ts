import styled from "styled-components";

import { device, size } from "../../styles/device";

export const Container = styled.div`
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 30px !important;
  background: ${(props) => props.theme.color.secondary};
  border-radius: 6px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: bold;
  transition: opacity 0.2s linear;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    box-shadow: none;
  }
    

  span {
    margin: 0 auto;
    color: ${(props) => props.theme.color.text_white};
    font-weight: 600;
  }
  
  
`;
