import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const QrCode = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <rect height="80" width="80" rx="8" ry="8" x="336" y="336" />
        <rect height="64" width="64" rx="8" ry="8" x="272" y="272" />
        <rect height="64" width="64" rx="8" ry="8" x="416" y="416" />
        <rect height="48" width="48" rx="8" ry="8" x="432" y="272" />
        <rect height="48" width="48" rx="8" ry="8" x="272" y="432" />
        <path d="M448 32H304a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zM208 32H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V64a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8zM208 272H64a32 32 0 00-32 32v144a32 32 0 0032 32h144a32 32 0 0032-32V304a32 32 0 00-32-32zm-32 136a8 8 0 01-8 8h-64a8 8 0 01-8-8v-64a8 8 0 018-8h64a8 8 0 018 8z" />
      </svg>
    );
  },
);

QrCode.displayName = "QrCode";
