import { Component } from '@angular/core';
import { RegisterData } from './register-data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: RegisterData= {

  };
  submit(): void{
    console.log(this.registerForm);
  }

}
