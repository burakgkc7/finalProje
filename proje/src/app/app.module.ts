import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FbServiceService } from './services/fbService.service';
import { environment } from './../environments/environment';
import { GirisComponent } from './components/giris/giris.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetayComponent } from './components/detay/detay.component';
import { HomeComponent } from './components/home/home.component';
/*import { PopulerComponent } from './components/populer/populer.component';*/
/*/import { DataService } from './services/data.service';*/
import { AdmingirisComponent } from './components/admingiris/admingiris.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetayComponent,
    GirisComponent,
    /*PopulerComponent,    
    AdmingirisComponent*/
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
  ],
  providers: [FbServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
