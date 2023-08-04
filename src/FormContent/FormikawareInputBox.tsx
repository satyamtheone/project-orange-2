import { useField } from "formik";
import React from "react";

import ErrorText from "./ErrorText";
import TextInput, { TextInputProps } from "./TextInput";

type YoTextFieldProps = React.PropsWithChildren<
  {
    name: string;
  } & TextInputProps
>;

const FormikAwareTextInput = ({ name, ...props }: YoTextFieldProps) => {
  const [field, meta, helpers] = useField<string>(name);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    helpers.setValue(e.target.value);
    helpers.setTouched(true, false);
  };

  const handleBlur = () => {
    helpers.setTouched(true, false);
  };

  return (
    <>
      <TextInput
        {...props}
        value={field.value}
        name={field.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={meta.touched && meta.error ? "input-error" : ""}
      />
      {meta.touched && meta.error && <ErrorText text={meta.error} />}
    </>
  );
};

export default FormikAwareTextInput;
