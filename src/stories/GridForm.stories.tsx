import {Meta} from '@storybook/react';
import GridFormSubmit from '../components/GridForm';
import GridForm from '../components/GridForm';

const meta: Meta = {
    title: 'GridForm',
    component: GridFormSubmit
}

export default meta;

export const Form = () => <GridFormSubmit></GridFormSubmit>