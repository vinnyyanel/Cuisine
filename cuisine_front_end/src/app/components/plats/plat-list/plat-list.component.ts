import { Component, OnInit } from '@angular/core';
import { Plat } from 'src/app/models/plat';
import { PlatService } from 'src/app/services/plat/plat.service';

@Component({
  selector: 'app-plat-list',
  templateUrl: './plat-list.component.html',
  styleUrls: ['./plat-list.component.css']
})
export class PlatListComponent implements OnInit{
  protected plats:Plat[]=[];

  constructor(private platService:PlatService){}

  ngOnInit(): void {
    this.allPlats();
  }

  allPlats(){
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
