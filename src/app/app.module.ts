import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './screens/login/login.component';
import { WelcomeComponent } from './widgets/welcome/welcome.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './screens/list/list.component';
import { LoginWidgetComponent } from './widgets/login-widget/login-widget.component';
import { ListWidgetComponent } from './widgets/list-widget/list-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    ListComponent,
    LoginWidgetComponent,
    ListWidgetComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
