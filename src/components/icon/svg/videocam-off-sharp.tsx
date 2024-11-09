import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const VideocamOffSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M57.376 79.998l22.627-22.627 358.63 358.63-22.627 22.628zM32 112a16 16 0 00-16 16v256a16 16 0 0016 16h288a15.89 15.89 0 009.34-3l-285-285zM336 208v-80a16 16 0 00-16-16H179.63l245.44 245.44L496 400V112z" />
      </svg>
    );
  },
);

VideocamOffSharp.displayName = "VideocamOffSharp";
