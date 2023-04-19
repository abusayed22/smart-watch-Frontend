import { ErrorMessage, Field } from "formik";
import React from "react";
import ErrorText from "./error/ErrorText";
import { styles } from "../../Styles/Style";

function Input(props) {
  const { name, label, ...rest } = props;
  return (
    <div>
      <label className={styles.f_label} htmlFor={name}>
        {label}
      </label>
      <Field name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText } />
    </div>
  );
}

export default Input;
