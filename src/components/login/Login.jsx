import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormController from "../../formHandling/FormController";
import { styles } from "../../Styles/Style";
// ---icone
import {BiHide, BiShowAlt} from "react-icons/bi"

function Login() {
  const [show,setShow] = useState(false);
  const toggledShow = () => {
    setShow((prv) => !prv);
  };

  //                  ---- formik-------
  const initialValues = {
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
      password: Yup.string().required('Required'),
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  return (
    <div className={`${styles.input_container} `}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(fromik) => {
          return (
            <Form>
              <FormController
                control="input"
                label="Email"
                id="email"
                name="email"
                type="email"
                className={styles.normal_input}
              />
              <div className="relative">
              <FormController
                control="input"
                label="Password"
                id="password"
                name="password"
                type={show? "text": "password"}
                className={styles.normal_input}
              />
              {show? <BiShowAlt onClick={toggledShow} className="absolute top-6 right-3 text-2xl"/>:<BiHide onClick={toggledShow} className="absolute top-6 right-3 text-2xl"/>}
                
              
              </div>
              

              <button type="submit"> test</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
