import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  protected users:User[]=[]

  constructor(private userService:UserService){}

  ngOnInit(): void {
    this.fetchAllUser();
  }


  fetchAllUser(){
    this.userService.getAllUsers().subscribe({
      next: (users)=>{
      this.users = users;
    },
      error:(error)=>{
      console.error(error);

    }})
  }

}
