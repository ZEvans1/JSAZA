//angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//bootstrap imports
import { AlertModule } from 'ngx-bootstrap';

//firebase imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { masterFirebaseConfig } from './../environments/api-keys';

//main project imports (components and routing)
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//service imports
import { AuthService } from './services/auth.service';
import { ArtistService } from './services/artist.service';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SearchComponent } from './search/search.component';
import { InstrumentPipe } from './instrument.pipe';
import { GenrePipe } from './genre.pipe';
import { AvailablePipe } from './available.pipe';

export const firebaseConfig = {
	apiKey: masterFirebaseConfig.apiKey,
	authDomain: masterFirebaseConfig.authDomain,
	databaseURL: masterFirebaseConfig.databaseURL,
	storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateArtistComponent,
    ViewUserComponent,
    SearchComponent,
    InstrumentPipe,
    GenrePipe,
    AvailablePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(masterFirebaseConfig),
    AlertModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    ArtistService],
  bootstrap: [AppComponent]
})
export class AppModule { }
