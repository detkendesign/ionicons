import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BatteryFullOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          x="32"
          y="144"
        />
        <rect
          height="114.14"
          width="292.63"
          rx="4"
          ry="4"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="32"
          x="85.69"
          y="198.93"
        />
        <path
          d="M480 218.67v74.66"
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

BatteryFullOutline.displayName = "BatteryFullOutline";
