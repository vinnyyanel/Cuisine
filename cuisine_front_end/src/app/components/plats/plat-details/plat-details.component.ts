import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatService } from 'src/app/services/plat/plat.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-plat-details',
  templateUrl: './plat-details.component.html',
  styleUrls: ['./plat-details.component.css']
})
export class PlatDetailsComponent implements OnInit{
  protected plat:any;
  protected createur:any;
  private id:string="";

  constructor(private route:ActivatedRoute,private userService:UserService,private platService:PlatService){}

  ngOnInit(): void {
      this.getPlat();

  }


  getCreator(id:number){
    this.userService.showUser(id).subscribe({
      next:(user)=>{
        this.createur = user;
        console.log(this.createur);
      },
      error:(error)=>{
        console.log(error);

      }
    })
  }

  getPlat(){
    this.route.paramMap.subscribe({
      next:(params)=>{
        let id = Number(params.get('id'));
        if (id != null) {
          this.platService.showPlat(id).subscribe({
            next:(plat)=>{
              console.log(plat);

              this.plat = plat;
               this.getCreator(plat.user_id);
            },
            error:(error)=>{
              console.log(error);
            }
          })
        }
      },
      error:(error)=>{
        console.log(error);
      }
    })
  }

}
