import { Invert } from './'

// ✅ It is working with string | number | symbol
const two = Symbol('2')
type Number = {
  1: 'one'
  [two]: 'two'
  3: 'three'
  4: 'four'
  5: 'five'
  6: 'six'
  7: 'seven'
  8: 'eight'
  9: 'nine'
}
// { two: typeof two, one: 1; three: 3; four: 4; five: 5; six: 6; seven: 7; eight: 8; nine: 9; }
type InvertedNumber = Invert<Number>

// ❌ It cannot work with object and array
type Flat = {
  rooms: {
    name: string
    area: number
  }[]
  tenant?: {
    name: string
  }
}
// @ts-ignore
type InvertedFlat = Invert<Flat>

// ✅ It merges the same values and gets union types
type FamilyMember = {
  dad: 'Andrew'
  mum: 'Arina'
  brother: 'Andrew'
}
// { Andrew: "dad" | "brother"; Arina: "mum"; }
type InvertedFamilyMember = Invert<FamilyMember>

// ✅ It ignores `null` and `undefined`
type Box = {
  pens: null
  pencils: undefined
}
// {}
type InvertedBox = Invert<Box>
// {}
type DoubleInvertedBox = Invert<Invert<Box>>

// ✅ It gets type as is after double usage
// { dad: 'Andrew'; mum: 'Arina'; brother: 'Andrew'; }
type DoubleInvertedFamilyMember = Invert<Invert<FamilyMember>>