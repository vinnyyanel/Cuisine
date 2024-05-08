import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PlatService } from 'src/app/services/plat/plat.service';

@Component({
  selector: 'app-plat-add',
  templateUrl: './plat-add.component.html',
  styleUrls: ['./plat-add.component.css']
})
export class PlatAddComponent {

  @Input() user_id:any;
  protected plat={
    nom:"",
    description:"",
    ingredients:"",
    recette:"",
    temps:"",
    difficultes:"",
    user_id:null
  };

  @Output() signal = new EventEmitter<string>;
  protected image:any;
  protected success:string="";

  constructor(private platService:PlatService){}

  selectImg(event:any){
    this.image = event.target.files[0];
  }
  createPlat(){
    this.plat.user_id = this.user_id;
    this.platService.postPlat(this.plat,this.image).subscribe({
      next:(message)=>{
        console.log(message);

        this.signal.emit(message.success);
      },
      error:(error)=>{
        console.log(error.error);

      }
    })
  }
}
