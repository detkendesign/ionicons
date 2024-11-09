import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoTwitch = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M80 32l-32 80v304h96v64h64l64-64h80l112-112V32zm336 256l-64 64h-96l-64 64v-64h-80V80h304z" />
        <path d="M320 143h48v129h-48zM208 143h48v129h-48z" />
      </svg>
    );
  },
);

LogoTwitch.displayName = "LogoTwitch";
