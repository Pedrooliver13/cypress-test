import React from 'react';

import * as S from './styles';

export const Input = ({
  label,
  name,
  type,
  value,
  placeholder,
  onBlur,
  error,
  onChange,
  defaultValue,
  required,
  disabled,
}: any) => {
  return (
    <S.Wrapper hasError={!!error} disabled={disabled}>
      <label className="label" htmlFor={name}>
        {label} {required && <span>*</span>}
      </label>
      <input
        className="input"
        type={type || 'text'}
        id={name}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />

      {error && <p className="error">{error}</p>}
    </S.Wrapper>
  );
};

export default Input;
