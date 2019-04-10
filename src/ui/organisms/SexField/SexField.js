import React from 'react'
import PropTypes from 'prop-types'

import { styled, withTheme } from '@ui/theme'
import { FieldContainer, HBox, Flex1, VBox } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, RadioField } from '@ui/molecules'

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const SexField = withTheme(
  ({
    theme,
    error,
    tip,
    disabled,
    name,
    value,
    label,
    onClick,
    onChange,
    onBlur

  }) => (
    <FieldContainer>
      <FormLabel>{label}</FormLabel>
      <HBox />
      <Row>
          <RadioField
            labelText={'муж.'}
            name={name}
            value="male"
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
            onChange={onChange}
          />
          <VBox width={theme.paddings.double}/>
          <RadioField
            labelText={'жен.'}
            name={name}
            value='female'
            disabled={disabled}
            onClick={onClick}
            onBlur={onBlur}
            onChange={onChange}
          />
      </Row>
      {error
       ? <InputError>{error}</InputError>
       : <InputTip>{tip}</InputTip>
      }
    </FieldContainer>
  ),
)

SexField.propTypes = {
  label:PropTypes.string,
  name: PropTypes.toString.isRequired,
  value: PropTypes.oneOf(['male','female']),
  error:PropTypes.bool,
  tip: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
}
