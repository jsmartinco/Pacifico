import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Routing
import { AppRoutingModule } from './app-routing.module';

//Componentes
import { interceptorProvider } from './interceptors/tick-interceptor.service';
import { DashComponent } from './components/dash/dash.component';
import { AppComponent } from './app.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './auth/login/login.component';
import { DetailComponent } from './components/detail/detail.component';


//Http
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

// ngx-toastr
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReportComponent } from './components/report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    MenuComponent,
    DashComponent,
    DetailComponent,
    ReportComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
