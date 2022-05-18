import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryISO, PhoneNumberFormat, SearchCountryField } from 'ngx-intl-tel-input';

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
separateDialCode = false;
SearchCountryField = SearchCountryField;
CountryISO = CountryISO;
PhoneNumberFormat = PhoneNumberFormat;
preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];

}
