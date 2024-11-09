import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PrintSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M400 96V56a8 8 0 00-8-8H120a8 8 0 00-8 8v40" />
        <path d="M408 112H104a56 56 0 00-56 56v208a8 8 0 008 8h56v72a8 8 0 008 8h272a8 8 0 008-8v-72h56a8 8 0 008-8V168a56 56 0 00-56-56zm-48 308a4 4 0 01-4 4H156a4 4 0 01-4-4V268a4 4 0 014-4h200a4 4 0 014 4zm34-212.08a24 24 0 1122-22 24 24 0 01-22 22z" />
        <rect
          height="160"
          width="208"
          fill="none"
          rx="4"
          ry="4"
          x="152"
          y="264"
        />
        <rect
          height="160"
          width="208"
          fill="none"
          rx="4"
          ry="4"
          x="152"
          y="264"
        />
      </svg>
    );
  },
);

PrintSharp.displayName = "PrintSharp";
