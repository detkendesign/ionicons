import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PrismSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M256 16L16 352l240 144 240-144zm-20 96.82v324.53L73.73 340z" />
      </svg>
    );
  },
);

PrismSharp.displayName = "PrismSharp";
