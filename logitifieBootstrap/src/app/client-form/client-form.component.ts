import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  paymentTerms:Array<String>=[
    '1 Day','2 Days','3 Days','4 Days','5 Days','6 Days','7 Days','8 Days','9 Days','10 Days'
    ,'11 Days','12 Days','13 Days','14 Days','15 Days','16 Days','17 Days','18 Days','19 Days','20 Days','21 Days','22 Days'
  ];

}
