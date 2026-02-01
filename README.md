# AdonisJS 7 Reproduction Issue

This repository contains a minimal reproduction of a TypeScript circular reference issue with AdonisJS transformers.

## Issue

**Type of property forDetailedView circularly references itself in mapped type when using useVariant**

### Location

The issue is isolated to these two transformers:

- `apps/backend/app/transformers/user_transformer.ts`
- `apps/backend/app/transformers/post_transformer.ts`

### Problem

When both transformers in a circular relationship use `useVariant()`, TypeScript throws:

```
Type of property forDetailedView circularly references itself in mapped type
```

This occurs when:
1. `UserTransformer` imports `PostTransformer` and calls `.useVariant()` on it
2. `PostTransformer` imports `UserTransformer` and calls `.useVariant()` on it
3. This bidirectional `useVariant()` usage creates the circular reference error

### Current Status

- Removing `useVariant()` from one or both transformers eliminates the error
- The circular import relationship alone is not the issue
- The error only appears when **both** transformers use `useVariant()` with each other

### Related Files

For detailed context on the transformer relationship, see the two transformer files mentioned above.
