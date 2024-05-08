import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  idParam:any;
  successmessage:string='';

  constructor(private userService:UserService,private platService:PlatService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.fetchAllPlat();
    this.fetchAllUser();
    this.fetchId();
  }

  fetchId(){
    this.route.paramMap.subscribe({
      next:(params)=>{
        this.idParam = Number(params.get('id'));
        console.log(this.idParam);

      },
      error:(error)=>{
        console.log(error);

      }
    });
  }
  success(success:string){
    this.successmessage=success;
    console.log(success);

    this.fetchAllUser();
    this.fetchAllPlat();
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
