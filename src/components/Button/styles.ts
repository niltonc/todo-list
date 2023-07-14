import styled from "styled-components";

export const Button = styled.button`
  align-items: center;
  background-color: #9165bf;
  border: 2px solid #111;
  border-radius: 8px;
  box-sizing: border-box;
  color: #111;
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 700;
  height: 48px;
  justify-content: center;
  line-height: 24px;
  max-width: 100%;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:after {
    background-color: #111;
    border-radius: 8px;
    content: "";
    display: block;
    height: 48px;
    left: 0;
    width: 100%;
    position: absolute;
    top: -2px;
    transform: translate(8px, 8px);
    transition: transform 0.2s ease-out;
    z-index: -1;
  }
  &:hover:after {
    transform: translate(0, 0);
  }
  &:active {
    background-color: #9165bf;
    outline: 0;
  }
  &:hover {
    outline: 0;
  }
  @media (min-width: 768px) {
    .button-56 {
      padding: 0 40px;
    }
  }
`;
