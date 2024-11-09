import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FilterSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M16 120h480v48H16zM96 232h320v48H96zM192 344h128v48H192z" />
      </svg>
    );
  },
);

FilterSharp.displayName = "FilterSharp";
