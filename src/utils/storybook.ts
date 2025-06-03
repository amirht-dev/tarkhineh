export const TYPES = {
  union: (...types: string[]) => types.join(" | "),
  arrayOf: (type: string) => `Array<${type}>`,
  undefinable: (type: string) => TYPES.union(type, TYPES.primitive.undefined),
  nullable: (type: string) => TYPES.union(type, TYPES.primitive.null),
  function: (params: Record<string, string>, returnType = "void") =>
    `(${Object.entries(params)
      .map(([paramKey, paramType]) => `${paramKey}: ${paramType}`)
      .join(", ")}) => ${returnType}`,
  object: <T extends Record<string, unknown>>(
    object: Record<keyof T, string>,
  ) =>
    `{
${Object.entries(object)
  .map(([key, value]) => `${key}: ${value}`)
  .join(";\n")}
}`,
  nullish: (type: string) =>
    TYPES.union(type, TYPES.primitive.undefined, TYPES.primitive.null),
  instanceOf: (instance: { new (): unknown }) => instance.name,
  primitive: {
    string: "string",
    number: "number",
    boolean: "boolean",
    undefined: "undefined",
    null: "null",
    symbol: "symbol",
  },
  instance: {
    date: "Date",
  },
  react: {
    elements: {
      HTMLElement: "HTMLElement",
      HTMLInputElement: "HTMLInputElement",
      HTMLDivElement: "HTMLDivElement",
    },
    ReactNode: "ReactNode",
    events: {
      ChangeEvent: (element: string, reactPrefix = true) =>
        `${reactPrefix ? "React." : ""}ChangeEvent<${element}>`,
      ChangeEventHandler: (genericType: string, reactPrefix = true) =>
        `${reactPrefix ? "React." : ""}ChangeEventHandler<${genericType}>`,
    },
  },
};

export const T = TYPES;
