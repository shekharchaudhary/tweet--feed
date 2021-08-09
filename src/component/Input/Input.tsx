import React from "react";
import {
  InputStyled,
  SearchIconStyled,
  InputContainerStyled,
} from "./Input.style";
import searchIcon from "../../assets/Icon/Search.svg";

export type InputProps = {
  defaultValue?: string;
  value?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  autoFocus?: boolean;
  inputRef?: any;
  onMouseDown?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  renderResetButton?: () => React.ReactNode;
};

export const Input: React.FC<
  InputProps & React.HTMLAttributes<HTMLInputElement>
> = ({
  defaultValue,
  placeholder,
  style,
  value,
  disabled,
  type,
  onClick,
  onChange,
  onFocus,
  onBlur,
  inputRef,
  autoFocus,
  autoComplete,
  onMouseDown,
  renderResetButton,
  ...props
}) => {
  return (
    <InputContainerStyled>
      <SearchIconStyled src={searchIcon} alt='icon' />
      <InputStyled
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        onClick={onClick}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        style={style}
        onFocus={onFocus}
        onBlur={onBlur}
        ref={inputRef}
        autoFocus={autoFocus}
        autoComplete={autoComplete}
        onMouseDown={onMouseDown}
        {...props}
      />
      <div>{renderResetButton && renderResetButton()}</div>
    </InputContainerStyled>
  );
};
