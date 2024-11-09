import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const LogoAppflow = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M198.626 28.424L8 484.423h114.376L256 164.779l133.624 319.645H504l-190.626-456H198.626z" />
        <path d="M312 346.039c0 30.928-25.072 56-56 56s-56-25.072-56-56 25.072-56 56-56 56 25.072 56 56z" />
      </svg>
    );
  },
);

LogoAppflow.displayName = "LogoAppflow";
