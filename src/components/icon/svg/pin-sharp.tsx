import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PinSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M339 99a83 83 0 10-102 80.8V464l19 32 19-32V179.8A83.28 83.28 0 00339 99zm-59-6a21 21 0 1121-21 21 21 0 01-21 21z" />
      </svg>
    );
  },
);

PinSharp.displayName = "PinSharp";
