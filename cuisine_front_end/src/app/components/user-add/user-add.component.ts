import { Component, EventEmitter, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
 protected user = {
  nom: "",
 prenom: "",
 dath_of_birth: "",
 email: "",
 role:"",
 image:"",
 password: ""
 };
protected image:any;
 @Output() signal = new EventEmitter<string>
 protected success:any;

 constructor(private userService:UserService){}

 userCreate(){
 console.log(this.user);
  this.userService.postUser(this.user,this.image).subscribe({
    next:(success)=>{
    this.signal.emit(success.success);
  },
  error:(error)=>{
    console.log(error);
  }})
 }

 onFileSlected(event:any){
 this.image = event.target.files[0];
 }

}
