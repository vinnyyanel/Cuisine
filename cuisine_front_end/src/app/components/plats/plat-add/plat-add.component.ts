import { Component } from '@angular/core';
import { PlatService } from 'src/app/services/plat/plat.service';

@Component({
  selector: 'app-plat-add',
  templateUrl: './plat-add.component.html',
  styleUrls: ['./plat-add.component.css']
})
export class PlatAddComponent {

  protected plat={
    nom:"",
    description:"",
    ingredients:"",
    recette:"",
    temps:"",
    difficultes:"",
    user_id:null
  };
  protected success:string="";

  constructor(private platService:PlatService){}

  createPlat(){
    this.platService.postPlat(this.plat).subscribe({
      next:(message)=>{
        this.success = message.success;
      },
      error:(error)=>{
        console.log(error.error);

      }
    })
  }
}
