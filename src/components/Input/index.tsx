import React, { useEffect, ReactElement } from "react";
import "react-multi-carousel/lib/styles.css";
import { InputProps } from "./props";

import { Container, Content, Label, Input } from "./styles";
import InputMask from "react-input-mask";

function InputComponent({
  label,
  mask,
  onChange,
  name,
  value,
  disabled,
  onFocus,
  onBlur,
  style,
  type,
  readonly,
}: InputProps): ReactElement {
  return (
      <Content>
        
        {mask && mask != "" ? (
          <InputMask 
            className={"form__input " + (value.length > 0 ? "has-letter" : "")}
            placeholder=""
            readonly={readonly}
            style={style}
            autoComplete="off"
            name={name}
            onChange={(el: any) => {
              if (onChange) {
                onChange(el);
              }
            }}
            value={value}
            disabled={disabled}
            onFocus={(el: any) => {
              if (onFocus) {
                onFocus(el);
              }
            }}
            onBlur={(el: any) => {
              if (onBlur) {
                onBlur(el);
              }
            }}
            mask={mask}
          />
        ) : (
          <Input
            className={"form__input " + (value.length > 0 ? "has-letter" : "") }
            placeholder=""
            readonly={readonly}
            style={style}
            autoComplete="off"
            name={name}
            onChange={(el: any) => {
              if (onChange) {
                onChange(el);
              }
            }}
            value={value}
            disabled={disabled}
            onFocus={(el: any) => {
              if (onFocus) {
                onFocus(el);
              }
            }}
            onBlur={(el) => {
              if (onBlur) {
                onBlur(el);
              }
            }}
          />
        )}
        <Label>{label}</Label>
      </Content>
  );
}

export default InputComponent;
