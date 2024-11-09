import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const InformationSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path
          d="M196 220h64v172M187 396h138"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="40"
        />
        <path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z" />
      </svg>
    );
  },
);

InformationSharp.displayName = "InformationSharp";
