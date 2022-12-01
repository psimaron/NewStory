import {Meta, Story} from '@storybook/react';
import StyledButton from "../components/StyledButton";

const meta: Meta = {
    title: 'MyButton',
    component: StyledButton
}

export default meta;

export const Default = () => <StyledButton variant='text'>Click me</StyledButton>
export const Contained = () => <StyledButton variant='contained'>Click me</StyledButton>