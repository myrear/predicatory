const excludeSymbol = Symbol()

const factory =
  <I, O extends I>(
    extract: (value: I) => O | typeof excludeSymbol
  ): ((value: I) => value is O) =>
  (value: I): value is O =>
    extract(value) !== excludeSymbol

export const guard = Object.assign(factory, {
  exclude: excludeSymbol,
} as const)
