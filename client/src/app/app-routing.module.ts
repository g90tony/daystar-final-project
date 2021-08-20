import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateViewsComponent } from './layouts/private-views/private-views.component';
import { PublicViewsComponent } from './layouts/public-views/public-views.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';
import { BrowseSearchComponent } from './pages/browse-search/browse-search.component';
import { BrowseViewComponent } from './pages/browse-view/browse-view.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EditProfileComponent } from './pages/profile-edit/edit-profile.component';
import { ProfileCreateComponent } from './pages/profile-create/profile-create.component';
import { RegisteredSearchComponent } from './pages/registered-search/registered-search.component';
import { RegisteredViewComponent } from './pages/registered-view/registered-view.component';
import { RegisteredComponent } from './pages/registered/registered.component';
import { AuthGuard } from './helpers/auth.guard';
import { isAuthenticated } from './helpers/isAuthenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: PrivateViewsComponent,
    children: [
      { path: '', component: DashboardComponent, canActivate: [AuthGuard] },
      {
        path: 'courses/browse',
        component: BrowseComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/browse/view/:id',
        component: BrowseViewComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/browse/search/:search_query',
        component: BrowseSearchComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/registered',
        component: RegisteredComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/registered/view/:id',
        component: RegisteredViewComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/registered/search/:search_query',
        component: RegisteredSearchComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'profile/edit',
        component: EditProfileComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'users',
    component: PublicViewsComponent,
    children: [
      {
        path: 'login',
        component: AuthLoginComponent,
        canActivate: [isAuthenticated],
      },
      {
        path: 'register',
        component: AuthRegisterComponent,
        canActivate: [isAuthenticated],
      },
    ],
  },
  {
    path: 'profile/create',
    component: PublicViewsComponent,
    canActivate: [AuthGuard],
    children: [{ path: '', component: ProfileCreateComponent }],
  },

  { path: '**', redirectTo: '/users/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
