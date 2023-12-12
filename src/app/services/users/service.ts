import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { type Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { type UserDetailReponse, type UserListResponse, type User, type BaseUser } from '../../models/users/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = 'https://reqres.in/api/users'
  constructor (private readonly http: HttpClient) {}

  getUsers (): Observable<User[]> {
    return this.http.get<UserListResponse>(this.usersUrl).pipe(map((users) => users.data || []))
  }

  getUserById (userId: number): Observable<UserDetailReponse> {
    return this.http.get<UserDetailReponse>(`${this.usersUrl}/${userId}`)
  }

  deleteUserById (userId: number): Observable<unknown> {
    return this.http.delete(`${this.usersUrl}/${userId}`)
  }

  addUser (payload: BaseUser): Observable<User> {
    return this.http.post<User>(this.usersUrl, payload)
  }
}
