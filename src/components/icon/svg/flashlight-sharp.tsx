import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FlashlightSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M330 16l-42.68 42.7L453.3 224.68 496 182 330 16z" />
        <path d="M429.21 243.85L268 82.59 249.65 168 16 402l94 94 234.23-233.8zm-189 56.07a20 20 0 110-25.25 20 20 0 01-.02 25.25z" />
        <ellipse cx="224.68" cy="287.3" fill="none" rx="20.03" ry="19.96" />
      </svg>
    );
  },
);

FlashlightSharp.displayName = "FlashlightSharp";
