import styled from "styled-components";

export const Dropdown = styled.div`
  width: 110px;
  position: relative;
  height: 50px;
`;

export const DropBnt = styled.div`

  label {
    position: absolute;
    left: 1rem;
    top: 1rem;
    padding: 0 .25rem;
    background: #fff;
    color: rgba(34, 34, 34, 0.5);
    font-size: 16px;
    transition: .2s;

    pointer-events: none;
  }

  input.has-letter ~ label {
      top: -.5rem;
      left: .8rem;
      color: #222;
      font-size: 14px;
      font-weight: 600;
      z-index: 10;
  }

`;

export const DropInput = styled.input`
  width: 100%;
  height: 50px;
  border: 1px solid #BDBDBD;
  border-right: none;
  border-radius: 6px 0 0 6px;
  padding: 1rem;
  font-size: 18px;
  cursor: pointer;

  &:disabled {
    background: #fff;
  }

  &:focus ~ label {
    top: -.5rem;
    left: .8rem;
    color: #222;
    font-size: 14px;
    font-weight: 600;
    z-index: 10;
  }
`;

export const DropContent = styled.div`
  position: absolute;
  width: calc(460px - 50px);
  top: calc(100% + 10px);
  border-radius: 10px;
  overflow: scroll;
  overflow-x: hidden;
  height: 400px;
  background: #fff;
  z-index: 99;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const DropItem = styled.div`
  p {
    margin-top: 0 !important;
    font-size: 16px !important;
  }

  label {
    opacity: 0.6;
  }

  img {
    width: 35px; 
    height: 35px;
    margin-right: 10px;
  }

  padding: 8px 15px;

  &:hover {
    cursor: pointer;
    background: rgba(240, 44, 94, 0.1);
  }
`;