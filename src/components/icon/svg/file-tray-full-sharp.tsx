import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const FileTrayFullSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M128 128h256v38H128zM112 192h288v38H112z" />
        <path d="M448 64H64L32 256v192h448V256zm-12 192H320a64 64 0 01-128 0H76l22-150h316z" />
      </svg>
    );
  },
);

FileTrayFullSharp.displayName = "FileTrayFullSharp";
