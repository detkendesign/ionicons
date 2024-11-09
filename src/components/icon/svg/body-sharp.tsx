import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const BodySharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <circle cx="256" cy="56" r="56" />
        <path d="M464 128H48v52h144l-32 325.13 51 6.87 21.65-192h47.02L301 512l51-6.98L320 180h144v-52z" />
      </svg>
    );
  },
);

BodySharp.displayName = "BodySharp";
