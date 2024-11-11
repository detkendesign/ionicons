import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BarcodeOutline = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M384 400.33l35.13-.33A29 29 0 00448 371.13V140.87A29 29 0 00419.13 112l-35.13.33M128 112l-36.8.33c-15.88 0-27.2 13-27.2 28.87v230.27c0 15.87 11.32 28.86 27.2 28.86L128 400M384 192v128M320 160v192M256 176v160M192 160v192M128 192v128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

BarcodeOutline.displayName = "BarcodeOutline";
