const neverSymbol = Symbol()

type Never = typeof neverSymbol

export const guard =
  <I, O extends I>(
    extract: (never: Never, value: I) => O | typeof neverSymbol
  ) =>
  (value: I): value is O =>
    Object.is(extract(neverSymbol, value), value)
