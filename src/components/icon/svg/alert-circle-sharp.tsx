import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const AlertCircleSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M240 304h32l6-160h-44l6 160z" fill="none" />
        <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm20 319.91h-40v-40h40zM272 304h-32l-6-160h44z" />
      </svg>
    );
  },
);

AlertCircleSharp.displayName = "AlertCircleSharp";
