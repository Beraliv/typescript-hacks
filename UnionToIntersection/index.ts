/**
 * Converts union type to intersection type
 * 
 * @version TypeScript 1.4
 * @see http://www.typescriptlang.org/docs/handbook/release-notes/typescript-1-4.html#union-types
 */
export type UnionToIntersection<T> = (
  // without this extends you get `T`
  T extends any ? (k: T) => void : never
) extends ((k: infer I) => void) ? I : never
