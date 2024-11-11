import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowUpRightBoxSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M480 32v164.364h-32V86.627l-43.636 43.637v-22.628h-22.628L425.373 64H315.636V32H480zM193.373 296l188.363-188.364H32V480h372.364V130.264L216 318.627 193.373 296z"
          fillRule="evenodd"
        />
      </svg>
    );
  },
);

ArrowUpRightBoxSharp.displayName = "ArrowUpRightBoxSharp";
