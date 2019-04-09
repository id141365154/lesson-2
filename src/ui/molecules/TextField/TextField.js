import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { HBox, VBox, IconLoader, IconSuccess, FieldContainer } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'
import { FormLabel, FormAdornment } from '@ui/molecules'
import { styled, withTheme } from '@ui/theme'

const TextFieldContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  height: 40px;
  min-height: 40px;
  border: 1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`

const StyledInput = styled.input`
  border: none;
  background-color: transparent;
  height: 40px;
  flex: 1;
  line-height: 18px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
    line-height: 44px;
  }
`

export const TextField = withTheme(
  ({
    theme,
    startAdornment,
    endAdornment,
    status,
    disabled,
    placeholder,
    label,
    error,
    value,
    tip,
    valid,
    onChange,
    onBlur,
    onFocus,
    name,
  }) => {
    const [focused, setFocused] = useState(false)
    const handleFocus = e => {
      if (onFocus) {
        onFocus(e)
      }
      setFocused(true)
    }
    const handleBlur = e => {
      if (onBlur) {
        onBlur(e)
      }
      setFocused(false)
    }
    return (
      <FieldContainer>
        <FormLabel valid={valid}>{label}</FormLabel>
        <HBox height={theme.paddings.half} />
        <TextFieldContainer focused={focused} error={error}>
          {startAdornment ? (
            <FormAdornment>{startAdornment}</FormAdornment>
          ) : (
            <VBox />
          )}
          <StyledInput
            name={name}
            placeholder={placeholder ? placeholder : ''}
            disabled={disabled}
            value={value}
            onChange={e => onChange(e)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
          <FormAdornment>
            {status === 'loading' ? (
              <IconLoader />
            ) : status === 'success' ? (
              <IconSuccess />
            ) : endAdornment ? (
              endAdornment
            ) : null}
          </FormAdornment>
        </TextFieldContainer>
        <HBox height={theme.paddings.half} />
        {error ? <InputError>{error}</InputError> : <InputTip>{tip}</InputTip>}
      </FieldContainer>
    )
  },
)

TextField.propTypes = {
  name: PropTypes.string,
  status: PropTypes.oneOf(['loading', 'success']),
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string.isRequired,
  tip: PropTypes.string,
  valid: PropTypes.bool,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
