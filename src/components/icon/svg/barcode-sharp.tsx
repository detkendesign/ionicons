import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BarcodeSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path
          d="M400 400.33l48-.33V112l-48 .33M112 112l-48 .33v288l48-.33M384 192v128M320 160v192M256 176v160M192 160v192M128 192v128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

BarcodeSharp.displayName = "BarcodeSharp";
