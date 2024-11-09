import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const VolumeOffSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M237.65 176.1H144v159.8h93.65L368 440V72L237.65 176.1z" />
      </svg>
    );
  },
);

VolumeOffSharp.displayName = "VolumeOffSharp";
