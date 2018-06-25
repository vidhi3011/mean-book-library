import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlashMessagesModule } from 'angular2-flash-messages/module';
import { FlashMessagesService } from 'angular2-flash-messages';

import { JwtHelperService } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JwtModule } from '@auth0/angular-jwt';
import { HttpModule } from '@angular/http';

import { HttpClientModule } from '@angular/common/http'; 

import { MyNavComponent } from './components/user_components/my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,
         MatButtonModule, 
         MatSidenavModule, 
         MatIconModule, 
         MatListModule, 
         MatGridListModule, 
         MatCardModule, 
         MatMenuModule, 
         MatFormFieldModule, 
         MatInputModule, 
         MatSelectModule,

         MatOptionModule,
         MatDatepickerModule,      
         MatNativeDateModule,
         MatRadioModule, 
         MatSlideToggleModule,

         MatDialogModule,

         ErrorStateMatcher,
         ShowOnDirtyErrorStateMatcher, MatTableModule, MatPaginatorModule, MatSortModule
        } from '@angular/material';

import 'hammerjs';

import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { MyDashboardComponent } from './components/user_components/my-dashboard/my-dashboard.component';
import { RegisterComponent } from './components/user_components/register/register.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/user_components/login/login.component';
import { ProfileComponent } from './components/user_components/profile/profile.component';
import { AdminLoginComponent } from './components/admin_components/admin-login/admin-login.component';
import { AdminNavComponent } from './components/admin_components/admin-nav/admin-nav.component';
import { BookDashComponent } from './components/admin_components/book-dash/book-dash.component';
import { UserDashComponent } from './components/admin_components/user-dash/user-dash.component';

import { BookTableComponent } from './components/admin_components/book-dash/book-table/book-table.component';
import { BookDialogComponent } from './components/admin_components/book-dash/book-dialog/book-dialog.component';
import { BookDelWarnComponent } from './components/admin_components/book-dash/book-table/book-del-warn/book-del-warn.component';
import { BookEditComponent } from './components/admin_components/book-dash/book-edit/book-edit.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    MyDashboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    AdminLoginComponent,
    AdminNavComponent,    
    BookDashComponent, BookTableComponent,
    UserDashComponent,
    BookDialogComponent,
    BookDelWarnComponent,
    BookEditComponent, 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSelectModule,
    
    MatDatepickerModule,      
    MatNativeDateModule,
    MatRadioModule, 
    MatOptionModule,
    MatSlideToggleModule,

    MatDialogModule,
    
    FlashMessagesModule,

    HttpClientModule,

    //Firebase stuff here
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,

    HttpModule,  
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('id_token');
        }
      }
    }), MatTableModule, MatPaginatorModule, MatSortModule 
  ], 
  entryComponents: [
    BookDialogComponent,
    BookDelWarnComponent,
    BookEditComponent
  ],
  exports: [      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule      
  ],  
  providers: [ValidateService, AuthService, FlashMessagesService, JwtHelperService,
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
