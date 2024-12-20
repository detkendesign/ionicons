import { forwardRef } from "react";
import { type DefaultIconProps } from "../types.js";

export const QrCodeSharp = forwardRef<SVGSVGElement, DefaultIconProps>(
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
        <path d="M336 336h80v80h-80zM272 272h64v64h-64zM416 416h64v64h-64zM432 272h48v48h-48zM272 432h48v48h-48zM336 96h80v80h-80z" />
        <path d="M480 240H272V32h208zm-164-44h120V76H316zM96 96h80v80H96z" />
        <path d="M240 240H32V32h208zM76 196h120V76H76zM96 336h80v80H96z" />
        <path d="M240 480H32V272h208zM76 436h120V316H76z" />
      </svg>
    );
  },
);

QrCodeSharp.displayName = "QrCodeSharp";
