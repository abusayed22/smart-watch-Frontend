import React, { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormController from "../../formHandling/FormController";
import { styles } from "../../Styles/Style";
// ---icone
import { BiHide, BiShowAlt } from "react-icons/bi";
import FormButton from "../reusableComponents/button/FormButton";
import { Link } from "react-router-dom";

function Login() {
  const [show, setShow] = useState(false);
  const toggledShow = () => {
    setShow((prv) => !prv);
  };
  
  

  //                  ---- formik-------
  const initialValues = {
    email: "",
    password: "",
    rememberme: false,
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    rememberme: Yup.boolean(),
  });

  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const rememberOp = [{ value: true, key: "remember me" }];

  return (
    <div className={`${styles.form_container}`}>
      <h1 className={`${styles.f_heading}`}>Login</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(fromik) => {
          return (
            <Form className="space-y-3">
              <FormController
                control="input"
                label="Email"
                id="email"
                name="email"
                type="email"
                className={styles.f_input}
              />
              <div className="relative ">
                <FormController
                  control="input"
                  label="Password"
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  className={styles.f_input}
                />
                {show ? (
                  <BiShowAlt
                    onClick={toggledShow}
                    className="absolute top-7 right-3 text-off_white text-2xl"
                  />
                ) : (
                  <BiHide
                    onClick={toggledShow}
                    className=" absolute top-7 right-3 text-off_white text-2xl"
                  />
                )}
              </div>
              <FormController
                control="checkbox"
                options={rememberOp}
                label="Remember me!"
                id="rememberme"
                name="rememberme"
                type="checkbox"
              />
              <Link to={'/'} className="flex justify-end underline">Forget Password!</Link>
              <div className="flex justify-center mt-5">
                <FormButton type="submit" text={"Login"} />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}

export default Login;
