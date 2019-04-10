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
  'user-name': yup.string().min(3, 'Минимум 3 символа').max(20, 'Максимум 20 символов').required('Поле обязательно'),
  'user-surname': yup.string().min(3, 'Минимум 3 символа').max(20, 'Максимум 20 символов').required('Поле обязательно'),
  'user-email': yup.string().email('Неккорректный E-mail адрес'),
  'user-phone': yup.string().min(10, 'Минимум 10 цифр').max(10, 'Максимум 10 цифр').matches(/[0-9]$/i).required('Поле обязательно'),
  'user-sex': yup.boolean().required('Поле обязательно'),
  'user-bio': yup.string().max(200, 'Слишком длинно, укоротите до 200 символов'),
  'user-agree': yup.boolean().required('Поле обязательно'),
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
