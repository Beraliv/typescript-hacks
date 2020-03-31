import { DeepReadonly } from ".";

/**
 * Readonly Object which is recursively applied to all values
 */
export type DeepReadonlyObject<T> = {
  readonly [K in keyof T]: DeepReadonly<T[K]>;
}
