import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const PodiumSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M160 32h192v448H160zM384 192h112v288H384zM16 128h112v352H16z" />
      </svg>
    );
  },
);

PodiumSharp.displayName = "PodiumSharp";
