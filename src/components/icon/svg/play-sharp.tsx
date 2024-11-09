import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PlaySharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M96 448l320-192L96 64v384z" />
      </svg>
    );
  },
);

PlaySharp.displayName = "PlaySharp";
