import { Component, type OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router'
import { UserDetailsComponent } from '../user-details/user-details.component'
import { UserService } from '../../services/users/service'
import { selectUsers } from '../../state/users/selectrors'
import { UsersApiActions } from '../../state/users/actions'
import { Store } from '@ngrx/store'

@Component({
  selector: 'user-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule, UserDetailsComponent],
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  users$ = this.store.select(selectUsers)

  onRemove (userId: number): void {
    this.userService.deleteUserById(userId).subscribe(() => { this.store.dispatch(UsersApiActions.removeUser({ userId })) }
    )
  }

  onAdd (firstName: string, lastName: string, email: string): void {
    const payload = { first_name: firstName, last_name: lastName, email }
    this.userService.addUser(payload).subscribe(user => { this.store.dispatch(UsersApiActions.addUser({ user })) }
    )
  }

  constructor (
    private readonly userService: UserService,
    private readonly store: Store
  ) {}

  selectedUserId?: number

  ngOnInit (): void {
    this.userService.getUsers()
      .subscribe(users => { this.store.dispatch(UsersApiActions.retrievedUserList({ users })) })
  }

  setSelected = (event: Event, userId: number): void => {
    event.preventDefault()
    this.selectedUserId = userId
  }
}
