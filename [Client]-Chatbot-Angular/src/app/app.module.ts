import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    ForgotPassComponent,
    HomeComponent,
    ContactUsComponent,
    FeaturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SocialLoginModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '971649972059-48o4aib1nfbda8utkkqo1257i5f1bl20.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('341543773654554'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
