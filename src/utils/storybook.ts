export const TYPES = {
  union: (...types: string[]) => types.join(' | '),
  arrayOf: (type: string) => `Array<${type}>`,
  undefinable: (type: string) => TYPES.union(type, TYPES.primitive.undefined),
  nullable: (type: string) => TYPES.union(type, TYPES.primitive.null),
  object: <T extends Record<string, unknown>>(
    object: Record<keyof T, string>
  ) =>
    `{
${Object.entries(object)
  .map(([key, value]) => `${key}: ${value}`)
  .join(';\n')}
}`,
  nullish: (type: string) =>
    TYPES.union(type, TYPES.primitive.undefined, TYPES.primitive.null),
  instanceOf: (instance: { new (): unknown }) => instance.name,
  primitive: {
    string: 'string',
    number: 'number',
    boolean: 'boolean',
    undefined: 'undefined',
    null: 'null',
    symbol: 'symbol',
  },
  instance: {
    date: 'Date',
  },
  react: {
    elements: {
      HTMLInputElement: 'HTMLInputElement',
      HTMLDivElement: 'HTMLDivElement',
    },
    ReactNode: 'ReactNode',
    events: {
      ChangeEventHandler: (genericType: string, reactPrefix = true) =>
        `${reactPrefix ? 'React.' : ''}ChangeEventHandler<${genericType}>`,
    },
  },
};

export const T = TYPES;
