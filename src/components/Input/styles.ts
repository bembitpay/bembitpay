import styled from "styled-components";

import { device, size } from "../../styles/device";

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  position: relative;
  margin: 20px 0 20px 0;
  border-radius: 12px;
  width: 100%;
  height: 50px;  

  &#fee {
    height: 30px !important;
  }

  .form__input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 18px;
    border: 1px solid #b3b3b3;
    border-radius: 6px;
    outline: none;
    padding: 1rem;
    background: none;
    z-index: 1;

    &:not([disabled]):focus ~ label {
      top: -.5rem;
      left: .8rem;
      color: #222;
      font-size: 14px;
      font-weight: 600;
      z-index: 10;
    }

    &:not([disabled]).has-letter ~ label {
      top: -.5rem;
      left: .8rem;
      color: #222;
      font-size: 14px;
      font-weight: 600;
      z-index: 10;
    }
  }

`;

export const Label = styled.label`
  position: absolute;
  left: 1rem;
  top: 1rem;
  padding: 0 .25rem;
  background: #fff;
  color: rgba(34, 34, 34, 0.5);
  font-size: 16px;
  transition: .2s;

  pointer-events: none;
`;

export const Input = styled.input`
  &[disabled] {
    height: auto !important;
    padding: 0 !important;
    border: none;
    background: none !important;
    opacity: 1 !important;
    font-weight: 600 !important;
    
    &:disabled {
      color: ${(props) => props.theme.color.text} !important;
    }
  }

  &[disabled] + label {
    padding: 0 !important;
    left: 0;
    top: 0;
    color: rgba(34, 34, 34, 0.6);
  }


`;
