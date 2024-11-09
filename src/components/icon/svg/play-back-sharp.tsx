import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PlayBackSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M496 400L256 256l240-144v288zM256 400L16 256l240-144v288z" />
      </svg>
    );
  },
);

PlayBackSharp.displayName = "PlayBackSharp";
