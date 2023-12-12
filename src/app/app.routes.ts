import { type Routes } from '@angular/router'
import { UserListComponent } from './components/user-list/user-list.component'
import { HomeComponent } from './components/home/home.component'

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: '', component: HomeComponent }
]
