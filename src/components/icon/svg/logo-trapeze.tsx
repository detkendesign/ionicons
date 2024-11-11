import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoTrapeze = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M311.05 189.26l.055-.093 64.98-110.618L257.923 8l-64.98 110.617-.096.164L8 433.451 126.162 504l85.948-146.312c14.612 17.618 32.393 33.074 53.108 45.442l168.804 100.785L504 384.789 335.197 284.004c-32.599-19.463-43.396-61.862-24.147-94.744z" />
      </svg>
    );
  },
);

LogoTrapeze.displayName = "LogoTrapeze";