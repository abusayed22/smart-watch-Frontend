import React, { useState } from 'react'
import FormController from '../../formHandling/FormController';
import { Link, useNavigate } from 'react-router-dom';
import FormButton from '../reusableComponents/button/FormButton';
import { BiHide, BiShowAlt } from 'react-icons/bi';
import { RxAvatar } from 'react-icons/rx';
import { styles } from '../../Styles/Style';
import { Form, Formik } from 'formik';
import * as Yup from "yup"
import axios from 'axios';
import { server } from '../../server/Server';

function Register() {

  const [show, setShow] = useState(false);
  const toggledShow = () => {
    setShow((prv) => !prv);
  };

  const navigate = useNavigate();

  // avatar 
  const [avatar,setAvatar] = useState(null);
// avatar change
const handleFileInputChange = (e) => {
  const file = e.target.files[0];
  setAvatar(file);
};

  //                  ---- formik-------
  const initialValues = {
    name: "",
    email: "",
    password: "",
    // rememberme: false,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("required!"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    // rememberme: Yup.boolean(),
  });

  const onSubmit = (values) => {
    // const config = {headers: { "Content-type": "application/json; charset=UTP-8" }};
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const formObj = {
      file: avatar,
      name: values.name,
      email: values.email,
      password: values.password
    }
    
console.log(formObj)
    // axios.post(`${server}/user/create-user`,formObj,config).then(res => {
    axios.post(`${server}/api/v2/user/create-user`,formObj,config).then(res => {
      // if(res.data.success === true) {
      //   navigate("/")
      // }
    }).catch(err=> {
      console.log(err)
      // a conditon error will naviage if already exist acount 
    })
  };

  const rememberOp = [{ value: true, key: "remember me" }];


  return (
    <div className={`${styles.form_container}`}>
      <h1 className={`${styles.f_heading}`}>Register as a new user</h1>
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
                label="Name"
                id="name"
                name="name"
                type="input"
                className={styles.f_input}
              />
              <FormController
                control="input"
                label="Email Address"
                id="name"
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
                {/* {show ? (
                  <BiShowAlt
                    onClick={toggledShow}
                    className="absolute top-7 right-3 text-off_white text-2xl"
                  />
                ) : (
                  <BiHide
                    onClick={toggledShow}
                    className=" absolute top-7 right-3 text-off_white text-2xl"
                  />
                )} */}
              </div>

              <div>
                <label htmlFor="avatar" className='block text-sm font-medium text-ash'></label>
                <div className="mt-2 flex items-center">
                  <span className='inline-block h-12 w-12 rounded-full overflow-hidden'>
                    {
                      avatar ? (
                        <img src={URL.createObjectURL(avatar)} alt="avatar" className="h-full w-full object-cover rounded-full" />
                      ):(
                        <RxAvatar className='h-8 w-8'/>
                      )
                    }
                  </span>
                  <label htmlFor="file-input" className='ml-5 flex items-end justify-center px-4 border border-ash hover:bg-blue hover:text-white transition-colors rounded-md shadow-2xl text-sm font-medium'>
                    <span>Upload a file</span>
                    <input type="file" name="avatar" id="file-input" accept='.jpg,.jpeg,.png' className='sr-only' onChange={handleFileInputChange}/>
                  </label>
                </div>
              </div>
              
              <Link to={'/login'} className="flex justify-end underline">Al-ready you are registered!</Link>
              <div className="flex justify-center mt-5">
                <FormButton type="submit" text={"Register"} />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  )
}

export default Register
