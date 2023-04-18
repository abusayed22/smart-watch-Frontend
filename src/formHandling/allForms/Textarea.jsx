import { ErrorMessage, Field } from 'formik';
import React from 'react'
import ErrorText from './error/ErrorText';

function Textarea(props) {
    const {label,name,...rest} = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as='textarea' name={name} {...rest}/>
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  )
}

export default Textarea
