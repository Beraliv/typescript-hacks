type InvertibleObject = Record<PropertyKey, PropertyKey>

type KeyByValue<V, O extends InvertibleObject> = {
  // Use `V extends O[K]` instead of `O[K] extends V` to ignore `null` and `undefined`
  [K in keyof O]: V extends O[K] ? K : never
}[keyof O]

/**
 * Inverts object's keys and values
 * 
 * @version TypeScript 2.9
 * @see https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#typescript-29
 */
export type Invert<O extends InvertibleObject> = {
  [V in O[keyof O]]: KeyByValue<V, O>
}