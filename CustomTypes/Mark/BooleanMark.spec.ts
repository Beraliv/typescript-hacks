import { BooleanMark } from './BooleanMark'

// ✅ It adds value `true` by default with a specified key
type Distance = number & BooleanMark<'distance'>
type Time = number & BooleanMark<'time'>

// ✅ It accepts `false` as value with a specified key
type RelativeValue = number & BooleanMark<'absolute', false>

let sec = 1 as Time
let km = 1 as Distance
let ratio = 1 as RelativeValue

// ✅ Flags are accessible only in types but return undefined
sec.time
km.distance
ratio.absolute
