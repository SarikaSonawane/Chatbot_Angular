import { NgModule, ContentChild } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'forgotpass', component: ForgotPassComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'contactus', component: ContactUsComponent },
      { path: 'features', component: FeaturesComponent },
      { path: '', redirectTo: 'features', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
