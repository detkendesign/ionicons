import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FunnelSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M0 48l192 240v128l128 48V288L512 48H0z" />
      </svg>
    );
  },
);

FunnelSharp.displayName = "FunnelSharp";
