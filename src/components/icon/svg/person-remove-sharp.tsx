import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PersonRemoveSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M16 214h144v36H16z" />
        <path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
        <circle cx="288" cy="144" r="112" />
      </svg>
    );
  },
);

PersonRemoveSharp.displayName = "PersonRemoveSharp";
