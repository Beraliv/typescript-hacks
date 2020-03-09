import { AbsoluteValue } from "../Mark/AbsoluteValue"
import { BooleanMark } from "../Mark/BooleanMark"

/**
 * Declares time in seconds
 */
export type Seconds = number & AbsoluteValue & BooleanMark<'seconds'>