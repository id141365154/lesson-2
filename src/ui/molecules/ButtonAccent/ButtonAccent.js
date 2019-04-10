import React from 'react'
import PropTypes from 'prop-types'
import { theme, styled } from '@ui/theme'
import { ButtonText } from '@ui/atoms/Typography'

const Button = styled('button')`
  display:block;
  width:100%;
  background: ${({ loading, theme }) =>
    loading ? theme.pallete.nero : theme.pallete.white};
  border: 2px solid
    ${({ disabled, theme, loading }) =>
      loading
        ? theme.pallete.nero
        : disabled
        ? theme.pallete.silver
        : theme.pallete.radicalRed};
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border-radius: 4px;
`



export const ButtonAccent = ({ loading, disabled, children, type, onPress }) => (
  <Button
    disabled={disabled}
    loading={loading}
    onClick={loading || disabled ? () => undefined : onPress}
    type={type}
  >
    {loading ? (
      'load'
    ) : (
      <ButtonText
        color={disabled ? theme.pallete.lightGray : theme.pallete.nero}
      >
        {children}
      </ButtonText>
    )}
  </Button>
)

ButtonAccent.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.string,
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
}
