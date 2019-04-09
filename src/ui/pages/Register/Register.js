import React from 'react'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled, theme } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, TextareaField, CheckboxWithText, ButtonAccent} from '@ui/molecules'
import { SexField} from '@ui/organisms'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

export const Register = ()=>{
  return (
    <PageTemplate>
      <Header title="Регистрация" icon={'back'} />
      <Flex1>
        <Wrapper>
          <HBox height={theme.paddings.half} />
          <TextField label={'Ваше имя'} placeholder={'Иван'}/>
          <HBox />
          <TextField label={'Ваша фамилия'} placeholder={'Иванов'}/>
          <HBox />
          <TextField label={'Номер телефона'} placeholder={'XXXXXXXXXX'} startAdornment={'+7'}/>
          <HBox />
          <TextField label={'Email'} placeholder={'simple@mail.com'}/>
          <HBox />
          <SexField name={'user-sex'} label={'Пол'}/>
          <HBox />
          <TextareaField label={'Немного о себе'} placeholder={'Ваше хобби, любимые книги и т.д.'}/>
          <HBox />
          <CheckboxWithText children={'Со всеми условиями согласен вторая строка'} />
          <HBox />
          <ButtonAccent children={'Отправить'} disabled={true}/>


        </Wrapper>
      </Flex1>
    </PageTemplate>
  )
}
