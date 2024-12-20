import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const MagnetSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
          d="M191.98 463.58v-48M90.16 421.4l33.94-33.94M47.98 319.58h48"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path d="M422.2 89.82a144 144 0 00-203.71-.07l-67.88 67.88 67.88 67.89 67.88-67.89a48 48 0 0168.46.59c18.3 18.92 17.48 49.24-1.14 67.86l-67.32 67.32 67.88 67.88 66.91-66.91c56.37-56.37 57.37-148.15 1.04-204.55zM82.718 225.517l45.255-45.254 67.883 67.882L150.6 293.4zM218.49 361.27l45.254-45.254 67.882 67.882-45.255 45.255z" />
      </svg>
    );
  },
);

MagnetSharp.displayName = "MagnetSharp";
