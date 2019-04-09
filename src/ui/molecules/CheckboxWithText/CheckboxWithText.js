import React from 'react'
import PropTypes from 'prop-types'

import { styled } from '@ui/theme'
import { VBox, HBox, Flex1 } from '@ui/atoms'
import { Body2,  InputError, InputTip } from '@ui/atoms/Typography'
import { CheckboxField } from '@ui/molecules'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const CheckboxWithText = ({
  children,
  value,
  name,
  onPress,
  error,
  tip,
  disabled,
}) => (
  <>
  <Container onClick={typeof children === 'string' ? onPress : undefined}>
    <CheckboxField
      value={value}
      name={name}
      error={error}
      disabled={disabled}
      onPress={typeof children === 'string' ? undefined : onPress}
    />
    <VBox />
    {typeof children === 'string' ? (
      <Flex1>
        <Body2>{children}</Body2>
      </Flex1>
    ) : (
      children
    )}

  </Container>
  {error
    ? <InputError>{error}</InputError>
    : tip
      ? <InputTip>{tip}</InputTip>
      : <HBox/>
  }
  </>
)

CheckboxWithText.propTypes = {
  children: PropTypes.node,
  value: PropTypes.bool,
  name:PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  error: PropTypes.string,
  tip: PropTypes.string,
  disabled: PropTypes.bool,
}
