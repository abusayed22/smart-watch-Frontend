import { Field } from "formik";
import React, { Fragment } from "react";

function Checkbox(props) {
  const { name, label, options, ...rest } = props;

  return (
    <div>
      <Field name={name} {...rest}>
        {({ field }) => {
         return options?.map((option) => {
            return (
              <React.Fragment key={option.value}>
                <input
                  id={option.value}
                  {...rest}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{label}</label>
              </React.Fragment>
            );
        });
    }}
      </Field>
    </div>
  );
}

export default Checkbox;
