const neverSymbol = Symbol()

type Never = typeof neverSymbol

export const guard =
  <I, O extends I>(
    extract: (value: I, never: Never) => O | typeof neverSymbol,
  ) =>
  (value: I): value is O =>
    Object.is(extract(value, neverSymbol), value)
