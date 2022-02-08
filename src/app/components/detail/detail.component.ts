import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Ticket } from '../../models/ticket';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { TokenService } from '../../service/token.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  ticket: Ticket;
  error:false;
  authority: string;
  roles: string[];
  isAdmin = false;
  fraude = false;  
  options:boolean = false;
 
  constructor(
    private apiService: ApiService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private tokenService: TokenService
    
  ) { 
    
  }

  ngOnInit(): void {
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol =>{
      if (rol === 'ROLE_GESTOR'){
        this.isAdmin = true;
      }
    })
    const id = this.activatedRoute.snapshot.params.id;
    this.apiService.details(id).subscribe(
      data => {
        this.ticket = data;
      },
      err => {
          this.toastr.error(err.error.mensaje, 'Fail',{
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.volver();
      }
    );
  }

  onUpdate(): void{    
    const id = this.activatedRoute.snapshot.params.id;
    console.log(this.ticket);
    this.apiService.update(id,this.ticket).subscribe(
      data => {
        this.toastr.success('Ticket Actualizado', 'Ok',{
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.volver();
      },
      err => {
          console.log(err)
          this.toastr.error(err.error, 'Fail',{
            timeOut: 3000, positionClass: 'toast-top-center',
          });
          this.volver();
      }
    );
  }

  onClose(forma:NgForm): void{
    if(forma.valid){
      forma.value.state = 'Cerrado';
      console.log(forma.value.state)
      this.ticket.setstate = forma.value.state;
      this.ticket.state='Cerrado'
      const id = this.activatedRoute.snapshot.params.id;
      console.log(this.ticket);
      //this.ticket("adsa");
      this.apiService.update(id,this.ticket).subscribe(
        data => {
          this.toastr.success('Ticket Actualizado y cerrado', 'Ok',{
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.volver();
        },
        err => {
            console.log(err)
            this.toastr.error(err.error, 'Fail',{
              timeOut: 3000, positionClass: 'toast-top-center',
            });
            this.volver();
        }
      );
    }else
    alert("Completa los campos");
}

  volver(): void {
    this.router.navigate(['/tickets']);
  }

 
  
 
}
