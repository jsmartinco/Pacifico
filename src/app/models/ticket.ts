export class Ticket {

    ticketid?: number;
    createdate: string;
    fraud: number;
    observations: string;
    conditions: string;
    state: string;
    difference: number;
    invoiceid: number;
    name: string;
    tname: string;
    address: string;
    additionalinfo: string;
    typedocument: string;
    document: string; 
    priority: string;
    invoice: any;
    employee: any;
    town: any;
    customer: any;
    ticket: any;
    cname:string;

    constructor(state: string){
        this.state = state;
    }

   public setstate(state: string){
       this.state = state;
   }

   

}

