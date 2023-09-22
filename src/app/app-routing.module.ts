import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { SavedUsersComponent } from './components/saved-users/saved-users.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'saved',
    component: SavedUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
