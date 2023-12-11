import { Component, Input, type SimpleChanges } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterOutlet } from '@angular/router'
import { type User } from '../../services/users/user'
import { UserService } from '../../services/users/service'

@Component({
  selector: 'user-details',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent {
  constructor (private readonly userService: UserService) {}

  @Input() userId: number = 0
  user?: User

  ngOnChanges (changes: SimpleChanges): void {
    const currentValue = changes['userId']?.currentValue as number
    if (currentValue !== undefined) {
      this.userService.getUserById(currentValue).subscribe(user => (this.user = user.data))
    }
  }
}
