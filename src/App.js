import React, { Component } from 'react'
import { Normalize } from 'styled-normalize'

import { Body2 } from '@ui/atoms/Typography'
import { theme, GlobalStyles, styled, ThemeProvider } from '@ui/theme'
import { Register } from '@ui/pages'

import { Formik } from 'formik'
import { string, object } from 'yup'

const InnerContainer = styled.div`
  background-color: white;
  flex: 1;
  max-width: 414px;
`

/*
const registerFormValidate = (values) => {
  let errors = {}
  if (!values['user-email']) {
    errors['user-email'] = 'Required'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values['user-email'])
  ) {
    errors['user-email'] = 'Invalid email address'
  }

  if (!values['user-phone']) {
    errors['user-phone'] = 'Required'
  } else if (
    !/[0-9]$/i.test(values['user-phone'])
  ) {
    errors['user-phone'] = 'Invalid phone '
  }
  return errors
}
*/


const registerFormInitialValues = {
  'user-email': '',
  'user-name': '',
  'user-surname': '',
  'user-phone': '',
  'user-sex': '',
  'user-bio': '',
}

let yup = require('yup')

let schema = yup.object().shape({
  'user-name': yup.string().min(3).max(20).required(),
  'user-surname': yup.string().min(3).max(20).required(),
  'user-email': yup.string().email(),
  'user-phone': yup.string().min(10).max(10).matches(/[0-9]$/i).required(),
  'user-sex': yup.boolean().required(),
  'user-bio': yup.string().max(200),
  'user-agree': yup.boolean().required(),
})


const App = () => (
  <InnerContainer>
    <ThemeProvider theme={theme}>
      <>
        <Normalize/>
        <GlobalStyles/>

        <Formik
          initialValues={registerFormInitialValues}
          validateOnChange={false}
          validateOnBlur={true}
          //validate={registerFormValidate}
          validationSchema={schema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values)
              setSubmitting(false)
            }, 400)
          }}
        >
          {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit}>
              <Register
                handleChange={handleChange}
                handelBlur={handleBlur}
                errors={errors}
                values={values}
                touched={touched}
                isSubmiting={isSubmitting}
              />
            </form>
          )}
        </Formik>
      </>
    </ThemeProvider>
  </InnerContainer>
)


export default App
