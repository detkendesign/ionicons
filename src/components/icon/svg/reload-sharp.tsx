import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ReloadSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path
          d="M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path d="M464 68.45V220a4 4 0 01-4 4H308.45a4 4 0 01-2.83-6.83L457.17 65.62a4 4 0 016.83 2.83z" />
      </svg>
    );
  },
);

ReloadSharp.displayName = "ReloadSharp";
