import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoAngular = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M213.57 256h84.85l-42.43-89.36L213.57 256z" />
        <path d="M256 32L32 112l46.12 272L256 480l177.75-96L480 112zm88 320l-26.59-56H194.58L168 352h-40L256 72l128 280z" />
      </svg>
    );
  },
);

LogoAngular.displayName = "LogoAngular";
