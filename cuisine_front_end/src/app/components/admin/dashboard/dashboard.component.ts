import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat';
import { User } from 'src/app/models/user';
import { PlatService } from 'src/app/services/plat/plat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{
  users:User[]=[];
  plats:Plat[]=[];

  constructor(private userService:UserService,private platService:PlatService){}

  ngOnInit(): void {
    this.fetchAllPlat();
    this.fetchAllUser();
  }

  fetchAllUser(){
    this.userService.getAllUsers().subscribe({
      next:(users)=>{
        this.users = users;
      },
      error:(error)=>{
        console.log(error);

      }
    })
  }

  fetchAllPlat(){
    this.platService.getPlat().subscribe({
      next:(plats)=>{
        this.plats = plats;
      },
      error:(error)=>{
        console.log(error);

      }
    })
  }
}
