import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BulbSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M208 464h96v32h-96zM192 416h128v32H192zM369.42 62.69C339.35 32.58 299.07 16 256 16A159.62 159.62 0 0096 176c0 46.62 17.87 90.23 49 119.64l4.36 4.09C167.37 316.57 192 339.64 192 360v40h48V269.11L195.72 244 214 217.72 256 240l41.29-22.39 19.1 25.68-44.39 26V400h48v-40c0-19.88 24.36-42.93 42.15-59.77l4.91-4.66C399.08 265 416 223.61 416 176a159.16 159.16 0 00-46.58-113.31z" />
      </svg>
    );
  },
);

BulbSharp.displayName = "BulbSharp";