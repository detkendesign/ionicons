import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const CartSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <circle cx="176" cy="416" r="32" />
        <circle cx="400" cy="416" r="32" />
        <path d="M167.78 304h261.34l38.4-192H133.89l-8.47-48H32v32h66.58l48 272H432v-32H173.42l-5.64-32z" />
      </svg>
    );
  },
);

CartSharp.displayName = "CartSharp";
