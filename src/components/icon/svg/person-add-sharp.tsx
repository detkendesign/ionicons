import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PersonAddSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z" />
        <path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
        <circle cx="288" cy="144" r="112" />
      </svg>
    );
  },
);

PersonAddSharp.displayName = "PersonAddSharp";
