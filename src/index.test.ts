import { guard } from './index'

test('make user defined type guard', () => {
  const isString = guard((never, value) =>
    typeof value === 'string' ? value : never
  )
  expect(isString('aaa')).toBe(true)
  expect(isString(1)).toBe(false)
  expect(isString({})).toBe(false)
})

test('different output returns false', () => {
  const fn = guard<{ a: 1 } | null, { a: 1 }>(() => ({ a: 1 }))
  expect(fn({ a: 1 })).toBe(false)
})

test('use with `Array.filter()`', () => {
  const array = [1, 'aaa', true, { b: 2 }, 'ccc']
  expect(
    array.filter(
      guard((never, value) => (typeof value === 'string' ? value : never))
    )
  ).toEqual(['aaa', 'ccc'])
})
