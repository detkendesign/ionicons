import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ClipboardSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M420 48h-68V28a12 12 0 00-12-12H172a12 12 0 00-12 12v20H92a12 12 0 00-12 12v424a12 12 0 0012 12h328a12 12 0 0012-12V60a12 12 0 00-12-12zm-84.13 64H176.13V80h159.74z" />
      </svg>
    );
  },
);

ClipboardSharp.displayName = "ClipboardSharp";
