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
export const isString = guard((value) =>
  typeof value === 'string' ? value : guard.exclude
)
```

# License

MIT
