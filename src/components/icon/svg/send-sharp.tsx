import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const SendSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M16 464l480-208L16 48v160l320 48-320 48z" />
      </svg>
    );
  },
);

SendSharp.displayName = "SendSharp";
