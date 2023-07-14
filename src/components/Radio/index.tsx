import { InputHTMLAttributes } from "react";
import * as S from "./styles";
type InputProps = InputHTMLAttributes<HTMLInputElement>;
const Radio = ({ ...rest }: InputProps) => {
  return <S.Radio type="radio" {...rest} />;
};
export default Radio;
