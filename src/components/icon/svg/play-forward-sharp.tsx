import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PlayForwardSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M16 400l240-144L16 112v288zM256 400l240-144-240-144v288z" />
      </svg>
    );
  },
);

PlayForwardSharp.displayName = "PlayForwardSharp";
