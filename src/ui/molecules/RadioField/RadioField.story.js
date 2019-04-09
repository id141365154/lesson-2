import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { RadioField } from './RadioField'

storiesOf('ui/molecules', module).add('RadioField', () => (
  <>
    <RadioField
      value={boolean('value', false)}
      name={'test1'}
      labelText={'test'}
      error={text('error', '')}
      disabled={boolean('disabled', false)}
      onPress={action('onPress')}
    />
    <RadioField
      value={boolean('value', false)}
      name={'test1'}
      labelText={'test'}
      error={text('error', '')}
      disabled={boolean('disabled', false)}
      onPress={action('onPress')}
    />
  </>

))
