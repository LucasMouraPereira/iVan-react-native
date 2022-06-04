import React from "react";

import * as S from './styled';

const CustomTextInput = ({ onChangeText, placeholder, value }) => (
  <S.ContainerTextInput>
    <S.TextInputCustom
      onChangeText={(text) => onChangeText(text)}
      placeholder={placeholder}
      value={value}
    />
  </S.ContainerTextInput>
);

export default CustomTextInput;
