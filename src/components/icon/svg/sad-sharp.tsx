import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const SadSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM328 208a24 24 0 11-24 24 23.94 23.94 0 0124-24zm-144 0a24 24 0 11-24 24 23.94 23.94 0 0124-24zm72 80c45.42 0 83.75 29.49 95.72 69.83 1 3.52 2.33 10.17 2.33 10.17H158s1.31-6.69 2.33-10.17C172.11 317.47 210.53 288 256 288z" />
      </svg>
    );
  },
);

SadSharp.displayName = "SadSharp";
