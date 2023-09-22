import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserId } from '../models/user.model';

const SAVED_USERS_KEY = 'savedUsers';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersUrl = 'https://randomuser.me/api';

  constructor(private http: HttpClient) {}

  getRandomUsers(): Observable<{ results: User[] }> {
    return this.http.get<{ results: User[] }>(`${this.usersUrl}?results=5`);
  }

  getSavedUsers(): User[] {
    const users = JSON.parse(localStorage.getItem(SAVED_USERS_KEY) ?? '[]');

    return users;
  }

  saveUser(user: User): void {
    const users = this.getSavedUsers();

    users.push(user);

    localStorage.setItem(SAVED_USERS_KEY, JSON.stringify(users));
  }

  isSavedUser({ value }: UserId): boolean {
    const users = this.getSavedUsers();

    return users.some((user) => user.id.value === value);
  }

  removeUser({ value }: UserId): void {
    const users = this.getSavedUsers();
    const filteredUsers = users.filter((user) => user.id.value !== value);

    localStorage.setItem(SAVED_USERS_KEY, JSON.stringify(filteredUsers));
  }
}
