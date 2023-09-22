import { Component, OnInit, DestroyRef } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private destroyRef: DestroyRef
  ) {}

  ngOnInit(): void {
    this.usersService
      .getRandomUsers()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((resp) => {
        this.users = resp.results;
      });
  }
}
