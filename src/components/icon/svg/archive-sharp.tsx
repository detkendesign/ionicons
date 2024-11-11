import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const ArchiveSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect height="80" width="448" rx="12" ry="12" x="32" y="48" />
        <path d="M64 160v280a24 24 0 0024 24h336a24 24 0 0024-24V160zm192 230.63L169.32 304 192 281.32l48 48.05V208h32v121.37l48.07-48.07 22.61 22.64z" />
      </svg>
    );
  },
);

ArchiveSharp.displayName = "ArchiveSharp";
