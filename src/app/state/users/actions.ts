import { createActionGroup, props } from '@ngrx/store'
import { type User, BaseUser } from '../../models/users/user'

export const UsersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Retrieved User List': props<{ users: readonly User[] }>(),
    'Remove User': props<{ userId: number }>(),
    'Add User': props<{ user: User }>()
  }
})
