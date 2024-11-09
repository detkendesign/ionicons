import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PlaySkipForwardSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M368.53 64v163.52L96 64v384l272.53-163.52V448H416V64h-47.47z" />
      </svg>
    );
  },
);

PlaySkipForwardSharp.displayName = "PlaySkipForwardSharp";
