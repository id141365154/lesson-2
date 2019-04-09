import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { SexField } from './SexField'

storiesOf('ui/organisms', module).add('SexField', () => (
  <SexField
    error = {text('error', 'error message')}
    tip = {text('tip', 'tip text')}
    disabled = {boolean('disabled', false)}
    name = {text('name', 'user-sex')}
    label = {text('label', 'Пол')}
    onClick={action('onClick')}
  />
))
