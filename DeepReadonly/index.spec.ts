import { DeepReadonly } from './'

// ✅ It doesn't matter for primitives
type DeepReadonlyNumber = DeepReadonly<number>
type DeepReadonlyString = DeepReadonly<string>
type DeepReadonlyBoolean = DeepReadonly<boolean>
type DeepReadonlyNull = DeepReadonly<null>
type DeepReadonlyUndefined = DeepReadonly<undefined>

let object = {
  a: {
    b: {
      c: 4
    }
  }
};

// ✅ It prohibits object from
let deepReadonlyObject: DeepReadonly<typeof object> = object;

// @ts-ignore: Cannot assign to 'a' because it is a read-only property
deepReadonlyObject.a = { b: { c: 5 } }
// @ts-ignore: Cannot assign to 'b' because it is a read-only property
deepReadonlyObject.a.b = { c: 5 }
// @ts-ignore: Cannot assign to 'c' because it is a read-only property
deepReadonlyObject.a.b.c = 5

let array = [{ a: 1 }, { a: 2 }, { a: 3 }];

let deepReadonlyArray: DeepReadonly<typeof array> = array;

// @ts-ignore Cannot assign to 'a' because it is a read-only property
deepReadonlyArray[0].a = 2;
// @ts-ignore Cannot assign to 'a' because it is a read-only property
deepReadonlyArray[1].a = 3;
// @ts-ignore Cannot assign to 'a' because it is a read-only property
deepReadonlyArray[2].a = 4;
