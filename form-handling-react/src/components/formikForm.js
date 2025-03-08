// src/components/formikForm.js

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  // Username validation - required and min length 3
  username: Yup.string()
    .required('Username is required') // string().required()
    .min(3, 'Username must be at least 3 characters'),

  // Email validation - required and valid email format
  email: Yup.string()
    .email('Invalid email format') // checks if email is valid
    .required('Email is required'), // string().required()

  // Password validation - required and min length 6
  password: Yup.string()
    .required('Password is required') // string().required()
    .min(6, 'Password must be at least 6 characters'),
});

// Initial values for the form fields
const initialValues = {
  username: '',
  email: '',
  password: '',
};

// The Formik form component
const FormikForm = () => {
  // onSubmit function to handle form submission
  const onSubmit = (values) => {
    console.log('Form Submitted:', values);
  };

  return (
    <div className="formik-form">
      <h2>Registration Form</h2>

      {/* Using Formik */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema} // Yup validation schema
        onSubmit={onSubmit}
      >
        {/* Formik's Form Component */}
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
            />
            {/* Displaying the error message for username */}
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
            {/* Displaying the error message for email */}
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
            {/* Displaying the error message for password */}
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          {/* Submit button */}
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
