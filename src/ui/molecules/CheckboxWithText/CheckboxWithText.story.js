import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { CheckboxWithText } from './CheckboxWithText'

storiesOf('ui/molecules', module).add('CheckboxWithText', () => (
  <CheckboxWithText
    value={boolean('value', false)}
    error={text('error', '')}
    tip={text('tip', '')}
    disabled={boolean('disabled', false)}
    onPress={action('onPress')}
    children={text('children', 'Со всеми условиями согласен')}
  />
))
