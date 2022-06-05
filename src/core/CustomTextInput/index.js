import React from "react";

import * as S from "./styled";

const CustomTextInput = ({ onChangeText, placeholder, value }) => {
  return (
    <S.ContainerTextInput>
      <S.TextInputCustom
        onChangeText={onChangeText}
        placeholder={placeholder}
        value={value}
        autoFocus={true}
      />
    </S.ContainerTextInput>
  );
};

export default CustomTextInput;
