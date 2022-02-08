import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticket } from '../models/ticket';
import { Report } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL = 'http://localhost:8080/api/';

  constructor(private httpClient: HttpClient) { }

  public listaTickets(): Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(this.apiURL + 'tickets');
  }

  public details(id: number): Observable<Ticket>{
    return this.httpClient.get<Ticket>(this.apiURL + `tickets/detail/${id}`)

  }

  public update(id: number, ticket: Ticket): Observable<any>{
    return this.httpClient.put<any>(this.apiURL + `tickets/detail/${id}`, ticket)
  }

  public listReport(): Observable<Report[]>{
    return this.httpClient.get<Report[]>(this.apiURL + 'reports');
  }

  public listReport2(): Observable<Report[]>{
    return this.httpClient.get<Report[]>(this.apiURL + 'reports2');
  }
}
