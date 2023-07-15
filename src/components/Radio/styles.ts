import styled from "styled-components";
import theme from "styles/theme";

export const Radio = styled.input`
  margin-right: 10px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid ${theme.colors.gray_300};
  outline: none;
  appearance: none;
  background: ${theme.colors.white};
  transition: all 0.3s ease;
  cursor: pointer;
  &:checked {
    background: ${theme.colors.purple_300};
    border-color: ${theme.colors.black};
    box-shadow: inset 0 0 0 2.5px ${theme.colors.white};
  }
`;
