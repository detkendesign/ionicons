import { forwardRef, type SVGAttributes } from "react";
import { type IconKeys, Icons } from "./resolver.js";

export interface IconProps extends Omit<SVGAttributes<SVGElement>, "name"> {
  name: IconKeys;
  svgName?: string;
}

export const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { name: iconName, svgName: name, ...rest } = props;
  const Component = Icons[iconName];

  if (!Component) {
    // TODO: Provide better error message
    throw new Error(`Invalid Icon name provided for Icon`);
  }

  return <Component ref={ref} name={name} {...rest} />;
});

Icon.displayName = "Icon";
