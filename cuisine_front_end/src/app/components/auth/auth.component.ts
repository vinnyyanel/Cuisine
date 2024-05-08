import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private authService:AuthService,private router:Router){ }

  logout(){
     this.authService.userLogout().subscribe({
      next:(message)=>{
        this.success = message.success;
      },
      error:(error)=>{
        this.error = error.error;
      }}
    );
    localStorage.removeItem('Token');
    localStorage.removeItem('user');

    console.log( localStorage.getItem('Token'));
    console.log('token supprimer');
  }
  auth(){
    this.authService.userAuth(this.user).subscribe({
      next:(message)=>{
        this.success= message.success;
        localStorage.setItem('Token', message.token);
        localStorage.setItem('user', message.user);
        const id = message.user.id;
        this.router.navigate(['/dashboard',id]);
      },
      error:(error)=>{
        console.log(error.error);
      }
    })
  }

}
