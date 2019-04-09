import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { SexField } from './SexField'

storiesOf('ui/organisms', module).add('SexField', () => (
  <SexField
    fromValue={text('fromValue', '10:00')}
    fromError={text('fromError', '')}
    fromAction={action('fromAction')}
    toValue={text('toValue', '20:00')}
    toError={text('toError', '')}
    toAction={action('toAction')}
    tip={text('tip', '')}
  />
))
