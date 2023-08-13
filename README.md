# predicatory

Zero dependency type-safe user defined type guard factory.

# Install

```sh
$ npm i predicatory
```

or

```sh
$ yarn add predicatory
```

# How to use

```typescript
import { guard } from 'predicatory'

// this inferred `(value: unknown) => value is string`
export const isString = guard((value, never) =>
  typeof value === 'string' ? value : never,
)

// this inferred `(value: any) => value is number`
export const isNumber = guard(Number)
```

# License

MIT
