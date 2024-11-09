import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const GlobeSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="44"
        />
        <path
          d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="44"
        />
        <path
          d="M117.33 121.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34M394.67 390.67c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="44"
        />
        <path
          d="M256 48v416M464 256H48"
          fill="none"
          stroke="currentColor"
          strokeMiterlimit="10"
          strokeWidth="44"
        />
      </svg>
    );
  },
);

GlobeSharp.displayName = "GlobeSharp";
