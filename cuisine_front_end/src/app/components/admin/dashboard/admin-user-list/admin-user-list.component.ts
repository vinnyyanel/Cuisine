import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent {

  @Input() users:User[]=[];
  @Output() signal = new EventEmitter<string>();

  constructor(private userService:UserService){}

  supprimer(id:number){
    this.userService.delUser(id).subscribe({
      next:(rep)=>{
        console.log(rep);
        this.signal.emit(rep.success);
      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
}
