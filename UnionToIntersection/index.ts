/**
 * Converts union type to intersection type
 * 
 * @version TypeScript 2.8
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
export type UnionToIntersection<T> = (
  // without this extends you get `T`
  T extends any ? (k: T) => void : never
) extends ((k: infer I) => void) ? I : never
