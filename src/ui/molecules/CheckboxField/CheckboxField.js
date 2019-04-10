import React from 'react'
import PropTypes from 'prop-types'
import { withTheme, styled } from '@ui/theme'
import { IconCheckboxOn, IconCheckboxOff } from '@ui/atoms'

const Container = styled.label`
  position:relative;
  width:24px;
  height:24px;
`

const Check = styled.div`
  display:none;
  position:absolute;
  top:0;
  left:0;
`
const HtmlCheckbox = styled.input`
  position:absolute;
  opacity:0;
  
  :checked+div{
    display:block; 
  }
`


export const CheckboxField = withTheme(
  ({ name, value, disabled, error, onPress, onChange, onBlur, theme }) => {
    return (

      <Container onClick={onPress && !disabled ? onPress : undefined}>
        <HtmlCheckbox
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          type="checkbox"/>
        <Check>
          <IconCheckboxOn
            color={disabled ? theme.pallete.whiteSmoke : undefined}
          />
        </Check>
        <IconCheckboxOff color={error ? theme.pallete.errorColor : undefined}/>
      </Container>
    )
  },
)

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.bool,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}
