import { Accessibility } from "./svg/accessibility.js";
import { AccessibilityOutline } from "./svg/accessibility-outline.js";
import { AccessibilitySharp } from "./svg/accessibility-sharp.js";

export const Icons = {
  ["accessibility"]: Accessibility,
  ["accessibility-outline"]: AccessibilityOutline,
  ["accessibility-sharp"]: AccessibilitySharp,
};

export type IconKeys = keyof typeof Icons;
