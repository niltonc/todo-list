import styled from "styled-components";
import theme from "styles/theme";

export const Button = styled.button`
  align-items: center;
  background-color: ${theme.colors.purple_100};
  border: 2px solid ${theme.colors.black};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${theme.colors.black};
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
    background-color: ${theme.colors.black};
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
    background-color: ${theme.colors.purple_300};
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
