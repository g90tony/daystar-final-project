import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClientModule,
  HttpClientXsrfModule,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './components/global/sidebar/sidebar.component';
import { NavComponent } from './components/global/nav/nav.component';
import { RegisteredComponent } from './pages/registered/registered.component';
import { BrowseComponent } from './pages/browse/browse.component';
import { CourseCardComponent } from './components/reusable/course-card/course-card.component';
import { RegisteredCardLargeComponent } from './components/reusable/registered-card-large/registered-card-large.component';
import { RegisteredCardSmallComponent } from './components/reusable/registered-card-small/registered-card-small.component';
import { BrowseViewComponent } from './pages/browse-view/browse-view.component';
import { RegisteredViewComponent } from './pages/registered-view/registered-view.component';
import { EditProfileComponent } from './pages/profile-edit/edit-profile.component';
import { LessonSelectorComponent } from './components/reusable/lesson-selector/lesson-selector.component';
import { AuthLoginComponent } from './pages/auth-login/auth-login.component';
import { AuthRegisterComponent } from './pages/auth-register/auth-register.component';
import { ProfileCreateComponent } from './pages/profile-create/profile-create.component';
import { PrivateViewsComponent } from './layouts/private-views/private-views.component';
import { PublicViewsComponent } from './layouts/public-views/public-views.component';
import { BrowseSearchComponent } from './pages/browse-search/browse-search.component';
import { RegisteredSearchComponent } from './pages/registered-search/registered-search.component';
import { AuthInceptors } from './helpers/authconfig.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoPlayerComponent } from './components/reusable/video-player/video-player.component';
import { VideoPlayerModule } from './modules/video-player/video-player.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavComponent,
    RegisteredComponent,
    BrowseComponent,
    CourseCardComponent,
    RegisteredCardLargeComponent,
    RegisteredCardSmallComponent,
    BrowseViewComponent,
    RegisteredViewComponent,
    EditProfileComponent,
    LessonSelectorComponent,
    AuthLoginComponent,
    AuthRegisterComponent,
    ProfileCreateComponent,
    PrivateViewsComponent,
    PublicViewsComponent,
    BrowseSearchComponent,
    RegisteredSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cooke',
      headerName: 'My-Xsrf-header',
    }),
    FormsModule,
    ReactiveFormsModule,
    VideoPlayerModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInceptors,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
