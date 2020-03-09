import { Seconds } from "./Seconds"
import { AbsoluteValue } from "../Mark/AbsoluteValue"

// ✅ It constrains arguments' and results' types
const getDiff = <T>(first: T, second: T) =>  (
  ((first as unknown) as number) - ((second as unknown) as number)
) as T extends AbsoluteValue ? T : unknown;

// ✅ Checks that both values are Seconds and therefore returns Seconds 
const firstResult = getDiff(2 as Seconds, 1 as Seconds)

// ❌ Checks that both values are NOT Seconds and therefore returns unknown 
const secondResult = getDiff(2 as unknown, 1 as Seconds)
const thirdResult = getDiff(2 as Seconds, 1 as unknown)

// ❌ Checks that one of values is any and therefore returns any
const fourthResult = getDiff(2 as Seconds, 1 as any)
const fifthResult = getDiff(2 as any, 1 as Seconds)