import { NgModule, ContentChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ProfileComponent } from './profile/profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgotpass', component: ForgotPassComponent },
  { path: 'error', component: ErrorPageComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'chatbot', component: ChatbotComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'features', component: FeaturesComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'logout', component: LogOutComponent },

      { path: '', redirectTo: 'features', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: ErrorPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
