import { forwardRef } from "react";
import { type IconKeys, Icons } from "./resolver.js";
import type { DefaultIconProps, IconSize } from "./types.js";
import { ICON_SIZE } from "./constants.js";

export interface IconProps extends Omit<DefaultIconProps, "name" | "size"> {
  name: IconKeys;
  svgName?: string;
  size?: IconSize | number;
}

const assertSize = (size: IconSize | number): number => {
  if (typeof size === "number") return size;

  return ICON_SIZE[size];
};

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name: iconName, svgName: name, size = "medium", ...rest } = props;
  const Component = Icons[iconName];

  if (!Component) {
    // TODO: Provide a better error message.
    throw new Error(`Invalid Icon name provided for Icon`);
  }

  return (
    <Component
      ref={ref}
      name={name}
      size={assertSize(size)}
      color="red"
      {...rest}
    />
  );
});

Icon.displayName = "Icon";
