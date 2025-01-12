import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  RegObj:Register;
  constructor()
  {
    this.RegObj = new Register();
  }

  onRegister()
  {
    console.log(this.RegObj);
  }
}
export class Register{
   Email:string;
   Password:string;
   Username:string;
   Role: string;
   Name:string;
   Phone:string;
   Address:string;
   
   constructor()
   {
    this.Email='';
    this.Password='';
    this.Username='';
    this.Role='';
    this.Name='';
    this.Phone='';
    this.Address='';
   }
}
