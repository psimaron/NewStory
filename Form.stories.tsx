import {Meta} from '@storybook/react';
import BasicForm from '../components/Form';

const meta: Meta = {
    title: 'MyForm',
    component: BasicForm
}

export default meta;

export const Form = () => <BasicForm>Submit</BasicForm>