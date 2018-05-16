import { add, sub } from './index'

test('Math is working', () => {
  expect(add(5, 5)).toBe(10)
  expect(sub(8, 3)).toBe(5)
})
