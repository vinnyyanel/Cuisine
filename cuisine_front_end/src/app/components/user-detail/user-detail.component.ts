import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{

  protected user:any;
  protected id:any;

  constructor(private userService:UserService, private route:ActivatedRoute){}

  ngOnInit(): void {
      this.fetchId();
  }
  fetchUser(){
    this.userService.showUser(this.id).subscribe({
      next:(user)=>{
        this.user = user;
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }
  fetchId(){
    this.route.paramMap.subscribe({
      next:(params)=>{
        this.id = Number(params.get('id'));
      },
      error:(error)=>{
        console.log(error);

      }
    });
    this.fetchUser();
  }




}
