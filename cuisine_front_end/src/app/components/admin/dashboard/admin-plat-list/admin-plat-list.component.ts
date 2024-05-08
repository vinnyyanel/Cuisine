import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Plat } from 'src/app/models/plat';
import { PlatService } from 'src/app/services/plat/plat.service';

@Component({
  selector: 'app-admin-plat-list',
  templateUrl: './admin-plat-list.component.html',
  styleUrls: ['./admin-plat-list.component.css']
})
export class AdminPlatListComponent {
  @Input() plats:Plat[] = [];
  @Output() signal = new EventEmitter<string>();

  constructor(private platService:PlatService){ }
  supprimer(id:number){
    this.platService.delPlat(id).subscribe({
      next:(rep)=>{
        console.log(rep);
        this.signal.emit(rep.success);
      },
      error:(error)=>{
        console.log(error);

      }
    });
  }

}
