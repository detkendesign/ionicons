import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const DocumentSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M240 216V32H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V224H248a8 8 0 01-8-8z" />
        <path d="M272 41.69V188a4 4 0 004 4h146.31a2 2 0 001.42-3.41L275.41 40.27a2 2 0 00-3.41 1.42z" />
      </svg>
    );
  },
);

DocumentSharp.displayName = "DocumentSharp";