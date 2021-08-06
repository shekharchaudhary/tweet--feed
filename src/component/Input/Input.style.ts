import React from "react";
import styled from "styled-components";

export const InputContainerStyled = styled.div`
  width: 100%;
  display: flex;
  border: 1px solid #e1e1e1;
  background: #fff;
  border-radius: 4px;
  margin-bottom: 20px;
`;

export const InputStyled = styled.input<
  React.InputHTMLAttributes<HTMLInputElement>
>`
  position: relative;
  border: none;
  font-size: 16px;
  font-weight: 300;
  font-family: inherit;
  line-height: 1.3;
  border-radius: 0;
  color: #44515c;
  background: #fff;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  margin: 0;
  padding: 16px;
  outline: none;
`;

export const SearchIconStyled = styled.img`
  margin-left: 20px;
`;
