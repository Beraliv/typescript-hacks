import { AbsoluteValue } from "../Mark/AbsoluteValue"
import { BooleanMark } from "../Mark/BooleanMark"

/**
 * Declares time in minutes
 */
export type Minutes = number & AbsoluteValue & BooleanMark<'minutes'>