import React from "react";

import * as S from './styled';

export const CustomTextInput = ({ handleChange, handleBlur, value, text }) => (
  <S.ContainerTextInput>
    <S.TextInputCustom
      onChangeText={handleChange(text)}
      onBlur={handleBlur(text)}
      value={value}
    />
  </S.ContainerTextInput>
);
