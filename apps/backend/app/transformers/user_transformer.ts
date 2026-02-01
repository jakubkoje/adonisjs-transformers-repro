import type User from '#models/user'
import { BaseTransformer } from '@adonisjs/core/transformers'
import PostTransformer from '#transformers/post_transformer'

export default class UserTransformer extends BaseTransformer<User> {
  toObject() {
    return {
      ...this.pick(this.resource, [
        'id',
        'fullName',
        'email',
        'createdAt',
        'updatedAt',
        'initials',
      ]),
      posts: PostTransformer.transform(this.resource.posts),
    }
  }

  forPostDetail() {
    return {
      ...this.pick(this.resource, [
        'id',
        'fullName',
        'email',
        'createdAt',
        'updatedAt',
        'initials',
      ]),
      posts: PostTransformer.transform(this.resource.posts).useVariant('forDetailedView'),
    }
  }
}
