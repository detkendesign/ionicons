import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const Albums = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M368 96H144a16 16 0 010-32h224a16 16 0 010 32zM400 144H112a16 16 0 010-32h288a16 16 0 010 32zM419.13 448H92.87A44.92 44.92 0 0148 403.13V204.87A44.92 44.92 0 0192.87 160h326.26A44.92 44.92 0 01464 204.87v198.26A44.92 44.92 0 01419.13 448z" />
      </svg>
    );
  },
);

Albums.displayName = "Albums";
