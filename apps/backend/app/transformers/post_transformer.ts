import type Post from '#models/post'
import { BaseTransformer } from '@adonisjs/core/transformers'
import UserTransformer from './user_transformer.ts'

export default class PostTransformer extends BaseTransformer<Post> {
  toObject() {
    return {
      ...this.pick(this.resource, ['id', 'title', 'createdAt', 'updatedAt']),
      user: UserTransformer.transform(this.resource.user),
    }
  }

  forDetailedView() {
    return {
      ...this.pick(this.resource, ['id', 'title', 'createdAt', 'updatedAt']),
      user: UserTransformer.transform(this.resource.user).useVariant('forPostDetail'),
    }
  }
}
