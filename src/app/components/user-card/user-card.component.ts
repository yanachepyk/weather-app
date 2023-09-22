import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  DestroyRef,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { finalize } from 'rxjs';
import { User, UserId } from 'src/app/models/user.model';
import { Weather } from 'src/app/models/weather.models';
import { UsersService } from 'src/app/services/users.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user!: User;
  @Output() onRemove: EventEmitter<UserId> = new EventEmitter<UserId>();

  loading: boolean = true;

  private _weather: Weather | undefined;

  constructor(
    private weatherService: WeatherService,
    private usersService: UsersService,
    private destroyRef: DestroyRef
  ) {}

  get isSavedUser(): boolean {
    return this.usersService.isSavedUser(this.user.id);
  }

  get weather(): Weather {
    return this._weather!;
  }

  ngOnInit(): void {
    this.weatherService
      .getWeather(this.user.location.coordinates)
      .pipe(
        finalize(() => (this.loading = false)),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((resp) => {
        this._weather = resp;
      });
  }

  handleUserClick(): void {
    if (!this.isSavedUser) {
      this.usersService.saveUser(this.user);
    } else {
      this.usersService.removeUser(this.user.id);
      this.onRemove.emit(this.user.id);
    }
  }
}
