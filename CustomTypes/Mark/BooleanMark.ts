/**
 * Adds custom flag to the type to distinct from another type
 * 
 * Example: `BooleanMark<'time'> = { time: true }`
 */
export type BooleanMark<K extends PropertyKey, V = true> = Record<K, V>