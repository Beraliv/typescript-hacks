import { UnionToIntersection } from './';

// ✅ It is working with union
type RequestResult = {
  error: Error
} | {
  data: Record<string, unknown>
}
// { error: Error; } & { data: Record<string, unknown>; }
type IntersectedRequestResult = UnionToIntersection<RequestResult>

// ✅ It is working with intersection
type DoubleIntersectedRequestResult = UnionToIntersection<UnionToIntersection<RequestResult>>

// ✅ It is working with any
type AnyIntersected = UnionToIntersection<any>

// ✅ It is working with never
type NeverIntersected = UnionToIntersection<never>

// ✅ It is working with unknown
type UnknownIntersected = UnionToIntersection<unknown>

// ✅ It is working with simple type
type NumberIntersected = UnionToIntersection<number>