import React from 'react'
import { storiesOf } from '@storybook/react'
import { TextareaField } from './TextareaField'
import { text, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { withState } from '@dump247/storybook-state'

storiesOf('ui/molecules', module).add(
  'TextareaField',
  withState({ value: '' })(({ store }) => (
    <TextareaField
      value={store.state.value}
      name={text('name', 'user-bio')}
      disabled={boolean('disabled', false)}
      label={text('label', 'Label')}
      placeholder={text(
        'placeholder',
        'Например, прошу представляться при звонке',
      )}
      error={text('error', '')}
      tip={text('tip', '')}
      onChange={value => store.set({ value })}
      onBlur={action('blur')}
      onFocus={action('focus')}
    />
  )),
)
