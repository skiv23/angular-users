import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { type Observable } from 'rxjs'
import { type UserDetailReponse, type UserListResponse } from './user'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersUrl = 'https://reqres.in/api/users'
  constructor (private readonly http: HttpClient) {}

  getUsers (): Observable<UserListResponse> {
    return this.http.get<UserListResponse>(this.usersUrl)
  }

  getUserById (userId: number): Observable<UserDetailReponse> {
    return this.http.get<UserDetailReponse>(`${this.usersUrl}/${userId}`)
  }
}
