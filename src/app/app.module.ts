import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {AuthService} from './auth.service';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { ShoweventsService } from './showevents.service';
import { AuthGuard } from './auth.guard';
import { TokenIntercepterService } from './token-intercepter.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService,ShoweventsService,AuthGuard,
    {provide:HTTP_INTERCEPTORS,
    useClass:TokenIntercepterService,
    multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
