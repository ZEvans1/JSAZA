import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';

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
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
