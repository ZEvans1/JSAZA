import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'create-artist',
    component: CreateArtistComponent
  },
  {
    path: 'details/:id',
    component: ViewUserComponent
  },
  {
    path: 'artist-search',
    component: SearchComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
