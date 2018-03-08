import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { CreateGroupComponent } from './create-group/create-group.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SearchComponent } from './search/search.component';
import { GroupSearchComponent } from './group-search/group-search.component'
import { EditComponent } from './edit/edit.component';
import { GroupDashboardComponent } from './group-dashboard/group-dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard/:id',
    component: DashboardComponent
  },
  {
    path: 'create-artist',
    component: CreateArtistComponent
  },
  {
    path: 'create-group',
    component: CreateGroupComponent
  },
  {
    path: 'details/:id',
    component: ViewUserComponent
  },
  {
    path: 'artist-search',
    component: SearchComponent
  },
  {
    path: 'group-search',
    component: GroupSearchComponent
  },
  {
    path: 'view-user/:id',
    component: DashboardComponent
  },
  {
    path: 'edit',
    component: EditComponent
  },
  {
    path: 'group-dashboard/:id',
    component: GroupDashboardComponent
  },
  {
    path:'view-group/:id',
    component: GroupDashboardComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
