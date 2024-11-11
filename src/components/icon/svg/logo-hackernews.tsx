import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoHackernews = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M32 32v448h448V32zm249.67 250.83v84H235v-84l-77-140h55l46.32 97.54 44.33-97.54h52.73z" />
      </svg>
    );
  },
);

LogoHackernews.displayName = "LogoHackernews";
