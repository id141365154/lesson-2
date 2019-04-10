import React from 'react'
import PropTypes from 'prop-types'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled, theme } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, TextareaField, CheckboxWithText, ButtonAccent} from '@ui/molecules'
import { SexField} from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Register = ({values, handleChange, handelBlur, errors, touched, handelSubmit})=>{

  let valid = false;

  valid = isEmpty(errors) && !isEmpty(touched);

  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }


  return (
    <PageTemplate>
      <Header title="Регистрация" icon={'back'} />
      <Flex1>
        <Wrapper>
          <HBox height={theme.paddings.half} />
          <TextField
            name={'user-name'}
            label={'Ваше имя'}
            placeholder={'Иван'}
            onChange={handleChange}
            onBlur={handelBlur}
            error={ touched['user-name'] ? errors['user-name'] : false}
            value={values['user-name']}
          />
          <HBox />
          <TextField
            name={'user-surname'}
            label={'Ваша фамилия'}
            placeholder={'Иванов'}
            onChange={handleChange}
            onBlur={handelBlur}
            error={ touched['user-surname'] ? errors['user-surname'] : false}
            value={values['user-surname']}
          />
          <HBox />
          <TextField
            name={'user-phone'}
            label={'Номер телефона'}
            startAdornment={'+7'}
            placeholder={'XXXXXXXXXX'}
            onChange={handleChange}
            onBlur={handelBlur}
            error={ touched['user-phone'] ? errors['user-phone'] : false}
            value={values['user-phone']}
          />
          <HBox />
          <TextField
            name={'user-email'}
            label={'Email'}
            placeholder={'simple@mail.com'}
            onChange={handleChange}
            onBlur={handelBlur}
            error={ touched['user-email'] ? errors['user-email'] : false}
            value={values['user-email']}
          />
          <HBox />
          <SexField
            name={'user-sex'}
            label={'Пол'}
            onBlur={handelBlur}
            onChange={handleChange}
            error={ touched['user-sex'] ? errors['user-sex'] : false}
            value={values['user-sex']}
          />
          <HBox />
          <TextareaField
            name={'user-bio'}
            label={'Немного о себе'}
            placeholder={'Ваше хобби, любимые книги и т.д.'}
            onChange={handleChange}
            onBlur={handelBlur}
            error={ touched['user-bio'] ? errors['user-bio'] : false}
            value={values['user-bio']}
          />
          <HBox />
          <CheckboxWithText
            name={'user-agree'}
            children={'Со всеми условиями согласен вторая строка'}
            value={values['user-agree']}
            onChange={handleChange}
            onBlur={handelBlur}
            error={ touched['user-agree'] ? errors['user-agree'] : false}
          />
          <HBox />
          <ButtonAccent
            children={'Отправить'}
            disabled={!valid}
            type={'submit'}
          />

        </Wrapper>
      </Flex1>
    </PageTemplate>
  )
}


Register.propTypes = {
  isSubmiting: PropTypes.bool,
  handleChange:PropTypes.func,
  handelBlur:PropTypes.func,
  errors:PropTypes.object,
  values:PropTypes.object,
  touched:PropTypes.object,

}
