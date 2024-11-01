import path from "path";
import fs from "fs";
import svgToJsx from "svg-to-jsx";
import ionicons from "ionicons/dist/ionicons.web-types.json" assert { type: "json" };
import { fileURLToPath } from "url";
import prettier from "prettier";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const iconList = ionicons.contributions.html.ionicons;

const rootDir = path.join(__dirname, "..");

const __directory = "src/components/icons/svg";

const dir = path.join(rootDir, __directory);

const resolverPath = path.join(rootDir, "src/components/icon/resolver.ts");

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const upperCamelCase = (...args: string[]) => {
  return args
    .join(" ")
    .replace(/[^a-zA-Z0-9]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

const prettierConfig = {
  parser: "typescript",
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: "all",
} as const;

const createElement = async (name: string, node: unknown) => {
  const componentName = upperCamelCase(name);

  const jsxString = await svgToJsx(node as string);

  const updatedJsxString = jsxString.replace(
    /<svg([^>]*)>/,
    `<svg$1 {...props} ref={ref}>`,
  );

  const element = `import { forwardRef, type SVGAttributes } from "react";

export const ${componentName} = forwardRef<SVGSVGElement, SVGAttributes<SVGElement>>(
  (props, ref) => {
    return (
      ${updatedJsxString}
    );
  }
);

${componentName}.displayName = "${componentName}";
`;

  const formattedElement = await prettier.format(element, prettierConfig);

  return formattedElement;
};

const allIcons = iconList
  .slice(0, 3)
  .map((icon) => upperCamelCase(icon.name))
  .join(", ");

const createImportStatement = (name: string) => {
  return `import { ${upperCamelCase(name)} } from "./svg/${name}.js";`;
};

iconList.slice(0, 3).forEach(async (icon) => {
  const iconLocation = path.join(rootDir, __directory, `${icon.name}.tsx`);

  const node = fs.readFileSync(`${rootDir}/node_modules/ionicons/${icon.icon}`);

  const element = await createElement(icon.name, node);

  fs.writeFileSync(iconLocation, element, "utf-8");

  const importStatement = createImportStatement(icon.name);
  fs.appendFileSync(resolverPath, importStatement, "utf-8");
});

const iconObject = `
const Icons = {${allIcons}}

export type IconKeys = keyof typeof Icons
`;

prettier.format(iconObject, prettierConfig).then((file) => {
  fs.appendFileSync(resolverPath, file, "utf-8");
});
