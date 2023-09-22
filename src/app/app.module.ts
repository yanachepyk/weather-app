import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UsersComponent } from './components/users/users.component';
import { SavedUsersComponent } from './components/saved-users/saved-users.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { GenderIconPipe } from './pipes/gender-icon/gender-icon.pipe';
import { WeatherIconPipe } from './pipes/weather-icon/weather-icon.pipe';
import { AddressPipe } from './pipes/address/address.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UsersComponent,
    SavedUsersComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GenderIconPipe,
    WeatherIconPipe,
    AddressPipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
