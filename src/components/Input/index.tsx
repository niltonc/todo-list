import { InputHTMLAttributes } from "react";
import * as S from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...rest }: InputProps) => {
  return <S.Input {...rest} />;
};
export default Input;
