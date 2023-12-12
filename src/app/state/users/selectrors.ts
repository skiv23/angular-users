import { createFeatureSelector } from '@ngrx/store'
import { type User } from '../../models/users/user'

export const selectUsers = createFeatureSelector<readonly User[]>('users')
