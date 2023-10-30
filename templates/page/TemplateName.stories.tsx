import type { Meta, StoryFn } from '@storybook/react';

import { TemplateName as StorybookTemplateName } from './TemplateName';

export default {
  title: 'Components/TemplateName',

  argTypes: {},
} as Meta<typeof StorybookTemplateName>;

export const TemplateName: StoryFn<typeof StorybookTemplateName> = (props) => <StorybookTemplateName {...props} />;

TemplateName.args = {};
