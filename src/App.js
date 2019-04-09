import React, { Component } from 'react'
import { Normalize } from 'styled-normalize'

import { Body2 } from '@ui/atoms/Typography'
import { theme, GlobalStyles, styled, ThemeProvider } from '@ui/theme'
import { Register } from '@ui/pages'
import { Formik } from 'formik'

const InnerContainer = styled.div`
  background-color: white;
  flex: 1;
  max-width: 414px;
`


const registerFormInitial = {
  email: '',
}

const registerFormValidate = values => {
  console.log('values', values)
  let errors = {}
  if (!values.email) {
    errors.email = 'Required'
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const App = () => (
  <InnerContainer>
    <ThemeProvider theme={theme}>
      <>
        <Normalize/>
        <GlobalStyles/>

        <h1>Anywhere in your app!</h1>
        <Formik
          initialValues={{ 'user-email': 'as', password: '' }}
          validate={values => {
            console.log('values', values)
            let errors = {}
            if (!values['user-email']) {
              errors['user-email'] = 'Required'
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values['user-email'])
            ) {
              errors['user-email'] = 'Invalid email address'
            }
            return errors
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
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
              />
            </form>
          )}
        </Formik>
      </>
    </ThemeProvider>
  </InnerContainer>
)


export default App
