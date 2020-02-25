/**
 * Constrains objects within condition
 * 
 * @version TypeScript 3.7
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 */
export function invariant(condition: any, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message)
  }    
}