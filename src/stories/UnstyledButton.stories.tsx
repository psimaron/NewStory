import {Meta, Story} from '@storybook/react';
import {UnstyledButton} from '../components/UnstyledButton';

const meta: Meta = {
    title: 'NewButton',
    component: UnstyledButton
}

export default meta;

export const First = () => <UnstyledButton color='error'>asd</UnstyledButton>