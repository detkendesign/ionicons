import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ShirtSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M256 42c-33.88 0-64-10-64-10v2a64 64 0 00128 0v-2s-30.12 10-64 10z" />
        <path d="M352 44c-5.49 47.76-46.79 85-96 85s-90.51-37.24-96-85L16 94l18 114 61.71 7.42c7.08.9 7.1.9 7.1 8.19L96 480h320l-6.81-256.39c-.21-7-.21-7 7.1-8.19L478 208l18-114z" />
      </svg>
    );
  },
);

ShirtSharp.displayName = "ShirtSharp";
