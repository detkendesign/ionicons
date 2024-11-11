import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PlaySkipBackSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M143.47 64v163.52L416 64v384L143.47 284.48V448H96V64h47.47z" />
      </svg>
    );
  },
);

PlaySkipBackSharp.displayName = "PlaySkipBackSharp";
