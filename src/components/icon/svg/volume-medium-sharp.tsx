import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const VolumeMediumSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M157.65 176.1H64v159.8h93.65L288 440V72L157.65 176.1z" />
        <path
          d="M352 320c9.74-19.41 16-40.81 16-64 0-23.51-6-44.4-16-64M400 368c19.48-34 32-64 32-112s-12-77.7-32-112"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    );
  },
);

VolumeMediumSharp.displayName = "VolumeMediumSharp";
