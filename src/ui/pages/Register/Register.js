import React from 'react'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled, theme } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, TextareaField, CheckboxWithText, ButtonAccent} from '@ui/molecules'
import { SexField} from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Register = ({values, handleChange, handelBlur, errors})=>{
  console.log('errors', errors)

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
          />
          <HBox />
          <TextField
            name={'user-surname'}
            label={'Ваша фамилия'}
            placeholder={'Иванов'}
          />
          <HBox />
          <TextField
            name={'user-phone'}
            label={'Номер телефона'}
            startAdornment={'+7'}
            placeholder={'XXXXXXXXXX'}
          />
          <HBox />
          <TextField
            name={'user-email'}
            label={'Email'}
            placeholder={'simple@mail.com'}
            onChange={handleChange}
            onBlur={handelBlur}
            error={errors['user-email']}
            value={values['user-email']}
          />
          <HBox />
          <SexField
            name={'user-sex'}
            label={'Пол'}
          />
          <HBox />
          <TextareaField
            name={'user-bio'}
            label={'Немного о себе'}
            placeholder={'Ваше хобби, любимые книги и т.д.'}
          />
          <HBox />
          <CheckboxWithText
            name={'user-agree'}
            children={'Со всеми условиями согласен вторая строка'}
          />
          <HBox />
          <ButtonAccent
            children={'Отправить'}
            disabled={true}/>
        </Wrapper>
      </Flex1>
    </PageTemplate>
  )
}
