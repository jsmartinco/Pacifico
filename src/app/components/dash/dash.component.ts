import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { ApiService } from 'src/app/service/api.service';
import { TokenService } from '../../service/token.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  tickets: Ticket[] = [];


  constructor(
    private apiService: ApiService,
    private router: Router,
    private token: TokenService
    ) { }

  ngOnInit(): void {
    this.listarTickets();
    const roles = this.token.getAuthorities();
    
  }

  listarTickets(): void{
    this.apiService.listaTickets().subscribe(
      data => {
        this.tickets = data;
                
      },
      err => {
        console.log(err);
      }
    )
  }


}
