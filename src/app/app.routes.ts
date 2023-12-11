import { type Routes } from '@angular/router'
import { ListUsersComponent } from './components/list-user/list-users.component'
import { HomeComponent } from './components/home/home.component'

export const routes: Routes = [
  { path: 'users', component: ListUsersComponent },
  { path: '', component: HomeComponent }
]
