import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { RadioField } from './RadioField'
import PropTypes from 'prop-types'

storiesOf('ui/molecules', module).add('RadioField', () => (
  <>
    <RadioField
      value={boolean('value', false)}
      name={text('name', 'userSex')}
      labelText={text('labelText', 'Текст лейбла')}
      error={text('error', '')}
      tip={text('tip', 'Подсказка')}
      disabled={boolean('disabled', false)}
      onClick = {action('onClick')}
      onBlur = {action('onBlur')}
      onFocus = {action('onFocus')}
    />

  </>

))
