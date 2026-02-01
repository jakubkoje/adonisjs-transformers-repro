# AdonisJS 7 Reproduction Issue

This repository contains a minimal reproduction of a TypeScript circular reference issue with AdonisJS transformers.

## Issue

**Type of property forDetailedView circularly references itself in mapped type when using useVariant**

### Location

The issue is isolated to these two transformers:

- `apps/backend/app/transformers/user_transformer.ts`
- `apps/backend/app/transformers/post_transformer.ts`

### Problem

When using `useVariant()` with transformers that have circular relationships, TypeScript throws:

```
Type of property forDetailedView circularly references itself in mapped type
```

This occurs when:
1. `UserTransformer` imports `PostTransformer`
2. `PostTransformer` imports `UserTransformer`
3. Either transformer calls `.useVariant()` on the other

### Current Status

- Removing `useVariant()` calls eliminates the error
- The circular import relationship itself is not the issue
- The error only appears when combining circular imports + `useVariant()` usage

### Related Files

For detailed context on the transformer relationship, see the two transformer files mentioned above.
