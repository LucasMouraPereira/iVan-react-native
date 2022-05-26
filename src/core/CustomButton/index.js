import React from "react";

import * as S from "./styled";

const CustomButton = ({ styled, title, onPress }) => (
  <S.ContainerButton>
    <S.HandleButton styled={styled} onPress={onPress}>
      <S.TextButton>{title}</S.TextButton>
    </S.HandleButton>
  </S.ContainerButton>
);

export default CustomButton;
