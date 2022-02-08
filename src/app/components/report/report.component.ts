import { Component, OnInit } from '@angular/core';
import { Report } from '../../models/report';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  report: Report[] = [];
  isReport1 = false;
  isReport2 = false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
   
  }

  listarReporte(){
    this.isReport1 = true;
    this.apiService.listReport().subscribe(
      data => {
        this.report = data;
        console.log(data);
      },err =>{
        alert(err);
      }
    )
    if(this.isReport2 === true){
      this.isReport2 = false;
    }
  }


listarReporte2(){
    this.isReport2 = true;
    this.apiService.listReport2().subscribe(
      data => {
        this.report = data;
        console.log(data);
      },err =>{
        alert(err);
      }
    )
    if(this.isReport1 === true){
      this.isReport1 = false;
    }
  }
}