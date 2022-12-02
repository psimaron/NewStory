import {Meta, Story} from '@storybook/react';
import {UnderlinedButtons} from '../components/UnderlinedButton';

const meta: Meta = {
    title: 'NewButton',
    component: UnderlinedButtons
}

export default meta;

export const First = () => <UnderlinedButtons variant='outlined' color='secondary'>Search</UnderlinedButtons>