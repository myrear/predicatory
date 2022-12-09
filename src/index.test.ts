import { guard } from './index'

test('make user defined type guard', () => {
  const isString = guard((value) =>
    typeof value === 'string' ? value : guard.exclude
  )
  expect(isString('aaa')).toBe(true)
  expect(isString(1)).toBe(false)
  expect(isString({})).toBe(false)
})

test('use with `Array.filter()`', () => {
  const array = [1, 'aaa', true, { b: 2 }, 'ccc']
  expect(
    array.filter(
      guard((value) => (typeof value === 'string' ? value : guard.exclude))
    )
  ).toEqual(['aaa', 'ccc'])
})
