/**
 * Constrains objects within condition
 * 
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
 * @version TypeScript 3.7
 */
export function invariant(condition: any, message?: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }    
}