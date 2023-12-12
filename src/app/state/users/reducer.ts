import { createReducer, on } from '@ngrx/store'
import { UsersApiActions } from './actions'
import { type User } from '../../models/users/user'

export const initialState: readonly User[] = []

export const usersReducer = createReducer(
  initialState,
  on(UsersApiActions.retrievedUserList, (_state, { users }) => users),
  on(UsersApiActions.removeUser, (state, { userId }) => state.filter(user => (user.id !== userId))),
  on(UsersApiActions.addUser, (state, { user }) => {
    return [...state, user]
  })
)
