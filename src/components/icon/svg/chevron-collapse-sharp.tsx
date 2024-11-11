import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ChevronCollapseSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
  ({ width, size, height, ...props }, ref) => {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        width={width ?? size}
        height={height ?? size}
        ref={ref}
        {...props}
      >
        <path d="M102.145 108.514L256 241.855l153.855-133.341-31.437-36.273L256 178.337 133.582 72.241l-31.437 36.273zm0 294.972L256 270.145l153.855 133.341-31.437 36.273L256 333.663 133.582 439.759l-31.437-36.273z" />
      </svg>
    );
  },
);

ChevronCollapseSharp.displayName = "ChevronCollapseSharp";