import { forwardRef } from "react";
import { type IconKeys, Icons } from "./resolver.js";
import type { DefaultIconProps, IconSize } from "./types.js";
import { ICON_SIZE } from "./constants.js";

export interface IconProps extends Omit<DefaultIconProps, "name" | "size"> {
  name: IconKeys;
  svgName?: string;
  size?: IconSize | number;
}

const getIconSize = (size: IconSize | number): number => {
  if (typeof size === "number") return size;

  return ICON_SIZE[size];
};

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ name, svgName, size = "medium", ...props }, ref) => {
    const Component = Icons[name];

    if (!Component) {
      // TODO: Provide a better error message.
      throw new Error(`Invalid Icon name provided for Icon`);
    }

    return (
      <Component
        ref={ref}
        name={svgName}
        size={getIconSize(size)}
        color="red"
        {...props}
      />
    );
  },
);

Icon.displayName = "Icon";
