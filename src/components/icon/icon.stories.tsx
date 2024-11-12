import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconProps } from "./icon.js";

const meta: Meta<IconProps> = {
  title: "Components/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    svgName: { table: { disable: true } },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large", 16, 24, 32],
      description: "Set the icon size, or provide a custom number.",
    },
    name: {
      description:
        "Choose an icon name. Supports outline, sharp, and logo types.",
    },
    color: {
      control: { type: "color" },
      description: "Only used for outline icons",
      table: { category: "Customization" },
    },
    fill: {
      control: { type: "color" },
      description: "Used for default, sharp, and logo icons",
      table: { category: "Customization" },
    },
  },
};

export default meta;

type Story = StoryObj<IconProps>;

export const Default: Story = {
  args: {
    name: "accessibility",
    size: "medium",
  },
};
