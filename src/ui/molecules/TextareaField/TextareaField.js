import React from 'react'
import PropTypes from 'prop-types'
import { styled, theme } from '@ui/theme'
import { FormLabel } from '@ui/molecules'
import { HBox, VBox } from '@ui/atoms'
import { InputError, InputTip } from '@ui/atoms/Typography'

const Container = styled.div`
  min-height: 125px;
  display: flex;
  flex-direction: column;
`
const FieldContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.pallete.darkWhite};
  border: 1px
    ${({ error, theme, focused }) =>
      error
        ? theme.pallete.errorColor
        : focused
        ? theme.pallete.lola
        : theme.pallete.darkWhite}
    solid;
`

const StyledTextarea = styled.textarea`
  border: none;
  resize: none;
  background-color: transparent;
  height: 101px;
  flex: 1;
  line-height: 24px;
  font-family: Montserrat;
  font-size: 16px;
  outline: none;
  padding: 10px 0;
  color: ${({ theme, disabled }) =>
    disabled ? theme.pallete.lightGray : theme.pallete.nero};
  ::placeholder {
    color: ${({ theme }) => theme.pallete.lightGray};
  }
`

export const TextareaField = props => {
  const [focused, setFocused] = React.useState(false)
  const handleFocus = e => {
    if (props.onFocus) {
      props.onFocus(e)
    }
    setFocused(true)
  }
  const handleBlur = e => {
    if (props.onBlur) {
      props.onBlur(e)
    }
    setFocused(false)
  }
  return (
    <Container>
      <FormLabel>{props.label}</FormLabel>
      <HBox height={theme.paddings.half} />
      <FieldContainer focused={focused} error={props.error}>
        <VBox width={theme.paddings.main} />
        <StyledTextarea
          name={props.name}
          value={props.value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          onChange={e => props.onChange(e)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <VBox width={theme.paddings.main} />
      </FieldContainer>
      <HBox height={theme.paddings.half} />
      {props.error
       ? <InputError>{props.error}</InputError>
       : props.tip
        ? <InputTip>{props.tip}</InputTip>
        : <HBox/>
      }
    </Container>
  )
}

TextareaField.propTypes = {
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  tip: PropTypes.string,

  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}
