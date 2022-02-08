import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashComponent } from './components/dash/dash.component';
import { DetailComponent } from './components/detail/detail.component';
import { ReportComponent } from './components/report/report.component';
import { TickGuardService as guard} from './guards/tick-guard.service';

//, canActivate: [guard], data: {expetedRol: ['gestor','user']}

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'tickets', component: DashComponent, canActivate: [guard], data: { expectedRol: ['ROLE_GESTOR', 'ROLE_USER'] }},  
  {path: 'tickets/detail/:id', component: DetailComponent, canActivate: [guard], data: { expectedRol: ['ROLE_GESTOR', 'ROLE_USER'] }},
  {path: 'report', component: ReportComponent, canActivate: [guard], data: { expectedRol: ['ROLE_GESTOR'] }},
  {path: '**', pathMatch: 'full',redirectTo:'login'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
