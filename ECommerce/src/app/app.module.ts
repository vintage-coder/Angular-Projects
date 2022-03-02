import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './Component/about/about.component';
import { ContactComponent } from './Component/contact/contact.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HomeComponent } from './Component/home/home.component';
import { LogoutComponent } from './Component/logout/logout.component';
import {AccountService} from './Services/account.service';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { DigitcountPipe } from './Pipes/digitcount.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    LogoutComponent,
    HeaderComponent,
    FooterComponent,
    DigitcountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule 
  ],
  providers: [AccountService],
  bootstrap: [AppComponent, HeaderComponent,FooterComponent]
})
export class AppModule { }
