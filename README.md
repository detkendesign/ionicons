# @dtkn/ionicons

A simple, flexible React component for using Ionicons in your app. Customize icon size, color, and style with ease.

## Installation

Install with npm, yarn, or pnpm:

```bash
npm install @dtkn/ionicons
# or
yarn add @dtkn/ionicons
# or
pnpm add @dtkn/ionicons
```

## Usage

Import the `Icon` component and start using Ionicons in your project:

```tsx
import { Icon } from "@dtkn/ionicons";

const App = () => (
  <div>
    {/* Default size options */}
    <Icon name="accessibility" size="small" /> {/* 16px */}
    <Icon name="accessibility" size="medium" /> {/* 24px */}
    <Icon name="accessibility" size="large" /> {/* 32px */}
    {/* Defaults to medium (24px) */}
    <Icon name="accessibility" />
    {/* Custom size (e.g., 16px) */}
    <Icon name="accessibility" size={16} />
  </div>
);
```

## API

### `<Icon />` Component

The `Icon` component renders SVG icons based on the specified `name` and other properties.

#### Props

| Prop   | Type                   | Default  | Description                                                                                             |
| ------ | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `name` | `IconKeys`             | —        | **Required**. Specifies the icon name to render.                                                        |
| `size` | `IconSize` or `number` | `medium` | Sets the icon size. Can be a predefined size (small, medium, large) or a custom pixel value (e.g., 16). |

### Customizing Icon Color

Set colors with `fill` (for filled/sharp icons) or `color` (for outline icons). Style with CSS or directly through props.

```tsx
import { Icon } from "@dtkn/ionicons";

const App = () => (
  <div>
    <Icon name="accessibility" fill="green" /> {/* Filled icon */}
    <Icon name="accessibility-outline" color="green" /> {/* Outline icon */}
    <Icon name="accessibility-sharp" color="green" /> {/* Sharp icon */}
  </div>
);
```

## Error Handling

An error will be thrown if an invalid `name` is provided, ensuring only valid icons are rendered.
