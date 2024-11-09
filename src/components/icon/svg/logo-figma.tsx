import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoFigma = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M336 176a80 80 0 000-160H176a80 80 0 000 160 80 80 0 000 160 80 80 0 1080 80V176z" />
        <circle cx="336" cy="256" r="80" />
      </svg>
    );
  },
);

LogoFigma.displayName = "LogoFigma";
