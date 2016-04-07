import React from 'react';
import { storiesOf } from '@kadira/storybook';
import BinaryChart from '../src/BinaryChart';
import DynamicChart from './DynamicChart';

storiesOf('Basic', module)
    .add('Empty', () =>
        <BinaryChart />
    )
    .add('Dynamic', () =>
        <DynamicChart />
    );