import { invariant } from './'

// ✅ It constrains arguments after conditions
function add(first: unknown, second: unknown) {
  invariant(typeof first === 'number', 'first value is not a number')
  invariant(typeof second === 'number', 'second value is not a number')

  return first + second;
}

// error 'first value is not a number' will be thrown
add('1', 2)
// error 'second value is not a number' will be thrown
add(1, '2')
// 3
add(1, 2)