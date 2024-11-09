import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArrowUpLeftBoxSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M32 32h164.364v32H86.627l43.637 43.636h-22.628v22.628L64 86.627v109.737H32V32zm264 286.627L107.636 130.264V480H480V107.636H130.264L318.628 296 296 318.627z"
          fillRule="evenodd"
        />
      </svg>
    );
  },
);

ArrowUpLeftBoxSharp.displayName = "ArrowUpLeftBoxSharp";
