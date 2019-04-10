import React from 'react'
import { storiesOf } from '@storybook/react'
import { ButtonAccent } from './ButtonAccent'
import { boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

storiesOf('ui/molecules', module).add('ButtonAccent', () => (
  <ButtonAccent
    disabled={boolean('disabled', false)}
    loading={boolean('loading', false)}
    type={text('submit')}
    onPress={action('press')}
  >
    Button
  </ButtonAccent>
))
