import { DeepReadonly } from ".";

/**
 * Readonly Array which is recursively applied to all elements
 */
export interface DeepReadonlyArray<T> extends ReadonlyArray<DeepReadonly<T>> {}
