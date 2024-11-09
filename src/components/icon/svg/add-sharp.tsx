import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const AddSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M256 112v288M400 256H112"
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

AddSharp.displayName = "AddSharp";
