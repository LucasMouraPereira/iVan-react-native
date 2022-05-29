import React from "react";

import * as S from './styled';

const CustomTextInput = ({ onChangeText, placeholder, value }) => (
  <S.ContainerTextInput>
    <S.TextInputCustom
      onChangeText={onChangeText}
      placeholder={placeholder}
      value={value}
    />
  </S.ContainerTextInput>
);

export default CustomTextInput;
