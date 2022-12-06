import {Meta} from '@storybook/react';
import DropDown from '../components/DropDown';

const meta: Meta = {
    title: 'Selectors',
    component: DropDown
}

export default meta;

export const Drop = () => <DropDown options={['Blue', 'Green', 'Red']}></DropDown>