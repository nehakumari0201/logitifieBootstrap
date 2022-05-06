import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logitifie-form',
  templateUrl: './logitifie-form.component.html',
  styleUrls: ['./logitifie-form.component.css']
})
export class LogitifieFormComponent implements OnInit {
  selectedFiles:any;

  constructor() { }

  ngOnInit(): void {
  }
//   selectFile(event :any) {
//     this.selectedFiles = event.target.files;
//     console.log(this.selectedFiles);

// }
}
