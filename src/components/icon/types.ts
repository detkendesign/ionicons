import type { SVGAttributes } from "react";

export type IconSize = "small" | "large" | "medium";

export interface DefaultIconProps extends SVGAttributes<SVGElement> {
  size?: number;
}
