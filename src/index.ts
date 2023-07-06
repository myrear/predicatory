const neverSymbol = Symbol()

const factory =
  <I, O extends I>(
    extract: (value: I) => O | typeof neverSymbol
  ): ((value: I) => value is O) =>
  (value: I): value is O => {
    const ret = extract(value)
    return Object.is(ret, value) && ret !== neverSymbol
  }

export const guard = Object.assign(factory, {
  NEVER: neverSymbol,
} as const)
