import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent{
  protected user = {
    email: "",
   password: ""
   };
  protected error:string ="";
  protected success:string ="";

  constructor(private authService:AuthService){ }

  logout(){
     this.authService.userLogout(this.user).subscribe({
      next:(message)=>{
        this.success = message.success;
      },
      error:(error)=>{
        this.error = error.error;
      }}
    );
    localStorage.removeItem('Token');

    console.log( localStorage.getItem('Token'));
    console.log('token supprimer');
  }
  auth(){
    this.authService.userAuth(this.user).subscribe({
      next:(message)=>{
        this.success= message.success;
        localStorage.setItem('Token', message.token);
        console.log(message.user);
        console.log(message.token);
      },
      error:(error)=>{
        console.log(error.error);
      }
    })
  }

}
