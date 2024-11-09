import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BatteryHalfSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
  ({ width, size, height, ...props }, ref) => {
    return (
      <svg
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? size}
        height={height ?? size}
        ref={ref}
        {...props}
      >
        <path d="M17 384h432V128H17zm32-224h368v192H49z" />
        <path d="M70.69 182.92H256v146.16H70.69zM465 202.67h32v106.67h-32z" />
      </svg>
    );
  },
);

BatteryHalfSharp.displayName = "BatteryHalfSharp";
