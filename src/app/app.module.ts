//angular imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//materialize imports
import "materialize-css";
import { MaterializeModule } from "angular2-materialize";

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
import { GroupService } from './services/group.service';

//components
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { SearchComponent } from './search/search.component';
import { CreateGroupComponent } from './create-group/create-group.component';

//pipes
import { InstrumentPipe } from './instrument.pipe';
import { GenrePipe } from './genre.pipe';
import { AvailablePipe } from './available.pipe';
import { GroupSearchComponent } from './group-search/group-search.component';
import { LookingForPipe } from './looking-for.pipe';
import { AvailableGroupPipe } from './available-group.pipe';
import { GenreGroupPipe } from './genre-group.pipe';
import { EditComponent } from './edit/edit.component';
import { GroupDashboardComponent } from './group-dashboard/group-dashboard.component';
import { GroupEditComponent } from './group-edit/group-edit.component';


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
    CreateGroupComponent,
    InstrumentPipe,
    GenrePipe,
    AvailablePipe,
    GroupSearchComponent,
    LookingForPipe,
    AvailableGroupPipe,
    GenreGroupPipe,
    EditComponent,
    GroupDashboardComponent,
    GroupEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(masterFirebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
		MaterializeModule
  ],
  providers: [
    AuthService,
    ArtistService,
		GroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
