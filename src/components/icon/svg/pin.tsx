import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Pin = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M336 96a80 80 0 10-96 78.39v283.17a32.09 32.09 0 002.49 12.38l10.07 24a3.92 3.92 0 006.88 0l10.07-24a32.09 32.09 0 002.49-12.38V174.39A80.13 80.13 0 00336 96zm-56 0a24 24 0 1124-24 24 24 0 01-24 24z" />
      </svg>
    );
  },
);

Pin.displayName = "Pin";
