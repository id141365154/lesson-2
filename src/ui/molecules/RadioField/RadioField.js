import React from 'react'
import PropTypes from 'prop-types'
import { withTheme, styled, theme } from '@ui/theme'



const Container = styled.label`
  display:inline-block;
  position:relative;
  padding-left:34px;
  font-size:16;
  line-height:24px;
  outline:none;
  border-bottom: 1px solid transparent;
  :focus{border-bottom:1px solid #eee;}
`

const RadioBox = styled.div`
  position:absolute;
  left:0;
  top:1px;
  width:20px;
  height:20px;
  border:1px solid ${theme.pallete.controlsBorder}
  border-radius:50%;
`
const CheckStyled = styled.div`
  position:absolute;
  left:-2px;
  top:-2px;
  width:20px;
  height:20px;
  opacity:0;
  transition: opacity 0.3s;
`

const HtmlRadio = styled.input`
  position:absolute;
  left:-9999px;
  visibility:hidden;
  :checked + div {opacity:1;}
`


const Check = ({value}) => (
  <CheckStyled value={value}>
    <svg width={24} height={24} fill="none">
      <circle cx={12} cy={12} r={10} fill="#FF3F6E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 15.5L6 12l-1.167 1.167L9.5 17.833l10-10-1.167-1.166L9.5 15.5z"
        fill="#fff"
      />
    </svg>
  </CheckStyled>
)


export const RadioField = withTheme(
  ({ value = false,
     name,
     labelText,
     error,
     disabled,
     onClick,
     onBlur,
     onFocus }) => {

      const onClickHandler = (e)=>{
        if (typeof e.target.children[1] !== 'undefined'){
          if (onClick){
            onClick(e)
          }
        }
      }

    const onFocusHandler = (e)=>{
        if (onFocus) {
          onFocus(e)
        }
    }

    const onBlurHandler = (e)=>{
      if (onBlur) {
        onBlur(e)
      }
    }

    const onKeyHandler = (e)=>{
      if (e.which == 32){ // space
        e.target.children[1].checked = true
      }
    }

      return (
        <div>
          <Container
            tabIndex={'0'}
            onClick={onClickHandler}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onKeyPress={onKeyHandler}
          >
            <RadioBox/>
            <HtmlRadio name={name} type={"radio"} checked={ value ? value : null }/>
            <Check/>
            {labelText}
          </Container>
        </div>
      )
  },
)

RadioField.propTypes = {
  value: PropTypes.bool,
  name: PropTypes.string,
  labelText: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func
}
