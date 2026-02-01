/// <reference path="./manifest.d.ts" />
import type { InferData, InferVariants } from '@adonisjs/core/types/transformers'
import type UserTransformer from '#transformers/user_transformer'
import type PostTransformer from '#transformers/post_transformer'

export namespace Data {
  export type User = InferData<UserTransformer>
  export namespace User {
    export type Variants = InferVariants<UserTransformer>
  }
  export type Post = InferData<PostTransformer>
  export namespace Post {
    export type Variants = InferVariants<PostTransformer>
  }
}
