import { Component, OnInit } from '@angular/core';
import { User, UserId } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-saved-users',
  templateUrl: './saved-users.component.html',
  styleUrls: ['./saved-users.component.scss'],
})
export class SavedUsersComponent implements OnInit {
  savedUsers: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.savedUsers = this.usersService.getSavedUsers();
  }

  removeSavedUser({ value }: UserId): void {
    const userIndex = this.savedUsers.findIndex(user => user.id.value === value);

    this.savedUsers.splice(userIndex, 1);
  }
}
