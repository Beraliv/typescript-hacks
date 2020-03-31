import { DeepReadonlyArray } from "./DeepReadonlyArray";
import { DeepReadonlyObject } from "./DeepReadonlyObject";

/**
 * Readonly which is recursively applied to object values and array elements
 */
export type DeepReadonly<T> = T extends undefined | null
  ? T
  : T extends PropertyKey | boolean | null
    ? T
    : T extends Array<infer U>
      ? DeepReadonlyArray<U>
      : DeepReadonlyObject<T>
