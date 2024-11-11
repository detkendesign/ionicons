import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const SchoolSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M256 370.43L96 279v98.42l160 88.88 160-88.88V279l-160 91.43z" />
        <path d="M512.25 192L256 45.57-.25 192 256 338.43l208-118.86V384h48V192.14l.25-.14z" />
      </svg>
    );
  },
);

SchoolSharp.displayName = "SchoolSharp";
