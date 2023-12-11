import { Component, type OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router'
import { UserDetailsComponent } from '../user-details/user-details.component'
import { UserService } from '../../services/users/service'
import { type User } from '../../services/users/user'

@Component({
  selector: 'list-users',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterModule, UserDetailsComponent],
  templateUrl: './list-users.component.html'
})
export class ListUsersComponent implements OnInit {
  constructor (private readonly userService: UserService) {}

  selectedUserId?: number
  users: User[] = []

  ngOnInit (): void {
    this.userService.getUsers()
      .subscribe(response => (this.users = response.data))
  }

  setSelected = (event: Event, userId: number): void => {
    event.preventDefault()
    this.selectedUserId = userId
  }
}
