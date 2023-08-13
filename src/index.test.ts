import { guard } from './index'

test('make user defined type guard', () => {
  const isString = guard((value, never) =>
    typeof value === 'string' ? value : never,
  )
  expect(isString('aaa')).toBe(true)
  expect(isString(1)).toBe(false)
  expect(isString({})).toBe(false)
})

test('example of `number` type guard', () => {
  const isNumber = guard(Number)
  expect(isNumber(1)).toBeTruthy()
  expect(isNumber('')).toBeFalsy()
})

test('different output returns false', () => {
  const fn = guard<{ a: 1 } | null, { a: 1 }>(() => ({ a: 1 }))
  expect(fn({ a: 1 })).toBe(false)
})

test('usage with `Array.filter()`', () => {
  const array = [1, 'aaa', true, { b: 2 }, 'ccc']
  expect(array.filter(guard(String))).toEqual(['aaa', 'ccc'])
})
