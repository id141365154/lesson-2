import React from 'react'
import PropTypes from 'prop-types'

import { styled, withTheme } from '@ui/theme'
import { FieldContainer, HBox, Flex1, VBox } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, SelectInput } from '@ui/molecules'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledText = styled.div`
  font-size: 16px;
  color: ${({ theme }) => theme.pallete.nero};
`

export const SexField = withTheme(
  ({
    theme,
    fromValue,
    toValue,
    fromAction,
    toAction,
    fromError,
    toError,
    tip,
  }) => (
    <FieldContainer>
      <FormLabel>Время доставки</FormLabel>
      <HBox height={theme.paddings.half} />
      <Row>
        <Flex1>
          <SelectInput
            value={fromValue}
            onPress={fromAction}
            error={fromError}
            startAdornment="от"
          />
        </Flex1>
        <VBox />
        <StyledText>&mdash;</StyledText>
        <VBox />
        <Flex1>
          <SelectInput
            value={toValue}
            onPress={toAction}
            error={toError}
            startAdornment="до"
          />
        </Flex1>
      </Row>
      <HBox height={theme.paddings.half} />
      {fromError || toError ? (
        <InputError>{fromError || toError}</InputError>
      ) : (
        <InputTip>{tip}</InputTip>
      )}
    </FieldContainer>
  ),
)

SexField.propTypes = {
  fromValue: PropTypes.string,
  fromAction: PropTypes.func.isRequired,
  fromError: PropTypes.string,
  toValue: PropTypes.string,
  toAction: PropTypes.func.isRequired,
  toError: PropTypes.string,
  tip: PropTypes.string,
}
