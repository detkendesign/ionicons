import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const RibbonSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M256 336c-5.22 0-10.4-.24-15.51-.69a176.12 176.12 0 01-131.29-78.37L20 416h115l58 96 82.53-177.09A177.53 177.53 0 01256 336zM403 256.74a176.9 176.9 0 01-88.18 69.14L273.7 415.5 319 512l58-96h115z" />
        <path d="M256 16c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144S335.4 16 256 16zm0 224a80 80 0 1180-80 80.09 80.09 0 01-80 80z" />
        <circle cx="256.02" cy="160" r="48" />
      </svg>
    );
  },
);

RibbonSharp.displayName = "RibbonSharp";
