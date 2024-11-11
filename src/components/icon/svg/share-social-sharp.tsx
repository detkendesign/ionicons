import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ShareSocialSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M378 324a69.78 69.78 0 00-48.83 19.91L202 272.41a69.68 69.68 0 000-32.82l127.13-71.5A69.76 69.76 0 10308.87 129l-130.13 73.2a70 70 0 100 107.56L308.87 383A70 70 0 10378 324z" />
      </svg>
    );
  },
);

ShareSocialSharp.displayName = "ShareSocialSharp";
