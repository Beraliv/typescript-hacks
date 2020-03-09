import { BooleanMark } from "./BooleanMark"

/**
 * Absolute value is a value compared to nothing.
 * 
 * In comparison, a relative value is created when two absolute values are compared to each other
 */
export type AbsoluteValue = BooleanMark<'__typeonly__is_absolute_value__'>
