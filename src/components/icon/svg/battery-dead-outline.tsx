import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BatteryDeadOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect
          height="224"
          width="400"
          fill="none"
          rx="45.7"
          ry="45.7"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="32"
          x="31"
          y="144"
        />
        <path
          d="M479 218.67v74.66"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

BatteryDeadOutline.displayName = "BatteryDeadOutline";
