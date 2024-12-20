import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const OpenSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M201.37 288l176-176H48v352h352V134.63l-176 176L201.37 288z" />
        <path d="M320 48v32h89.37l-32 32L400 134.63l32-32V192h32V48H320z" />
      </svg>
    );
  },
);

OpenSharp.displayName = "OpenSharp";
