import React from 'react'
import { storiesOf } from '@storybook/react'
import { PageTemplate, HBox, Flex1, Divider } from '@ui/atoms'
import { styled } from '@ui/theme'
import { Body2 } from '@ui/atoms/Typography'
import { Header, TextField, ButtonAccent, RequestStatus } from '@ui/molecules'
import { action } from '@storybook/addon-actions'

const Wrapper = styled.div`
  padding: ${({ theme }) => theme.paddings.main}px;
`

storiesOf('ui/pages', module).add('SignInConfirm', () => {
  return (
    <PageTemplate>
      <Header title="Введите код" />
      <Divider />
      <Flex1>
        <Wrapper>
          <HBox height={9} />
          <Body2>На указанный телефон выслан код подтверждения</Body2>
          <HBox height={20} />
          <TextField
            label="Код"
            placeholder="1234"
            onChange={action('onChange')}
            value=""
          />
        </Wrapper>
        <RequestStatus
          status="loading"
          loadingMessage="Отправляем код подтверждения..."
        />
      </Flex1>
    </PageTemplate>
  )
})
