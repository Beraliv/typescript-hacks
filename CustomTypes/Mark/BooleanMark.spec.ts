import { BooleanMark } from './BooleanMark'

// ✅ It adds value `true` with a specified key
type Distance = number & BooleanMark<'distance'>
type Time = number & BooleanMark<'time'>

let sec = 1 as Time
let km = 1 as Distance

// ✅ Flags are accessible only in types but return undefined
sec.time
km.distance
