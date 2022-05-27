import React from "react";
import { Formik } from "formik";

import CustomTextInput from "~/core/CustomTextInput";
import CustomButton from "~/core/CustomButton";

import * as S from './styled';

const CustomForm = ({ initialValues }) => (
  <Formik
    initialValues={initialValues}
    onSubmit={(values) => console.log(values)}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
      <S.Form>
        <CustomTextInput
          handleChange={handleChange}
          handleBlur={handleBlur}
          value={values}
        />
        <CustomButton onPress={handleSubmit} title="Cadastrar rotas" />
      </S.Form>
    )}
  </Formik>
);

export default CustomForm;
