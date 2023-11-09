import type { Meta, StoryFn } from '@storybook/react';

import { AddTodo as StorybookAddTodo } from './AddTodo';

export default {
  title: 'Components/AddTodo',

  argTypes: {},
} as Meta<typeof StorybookAddTodo>;

export const AddTodo: StoryFn<typeof StorybookAddTodo> = (props) => (
  <StorybookAddTodo {...props} />
);

AddTodo.args = {};
