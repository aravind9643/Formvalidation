import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  formdata: FormGroup;

  email;
  constructor() {

  }
  ngOnInit() {
    var formbuild = new FormBuilder();
    this.formdata = formbuild.group({
      // email: new FormControl("aravind", Validators.compose([Validators.required, Validators.pattern("[^ @]*@[^ @]*")])),
      email: ["cc", [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]],
      pword: ["ff", [Validators.required, Validators.minLength(8)]]
    });
  }
  onSub(data) {
    console.log(data.email);
    console.log(data.pword);
  }
}
