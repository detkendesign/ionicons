import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoCapacitor = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M480 101.09L372.37 208.72l106.86 107.06-69.3 69.3-283.22-283.23L196 32.54l107.07 106.88L410.67 32zM32.55 196l69.3-69.31 283.22 283.24-69.3 69.3-107-106.87L101.08 480 32 410.67l107.42-107.61z" />
      </svg>
    );
  },
);

LogoCapacitor.displayName = "LogoCapacitor";
