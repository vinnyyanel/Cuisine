import { Component } from '@angular/core';
import { Plat } from 'src/app/models/plat';

@Component({
  selector: 'app-plat-modif',
  templateUrl: './plat-modif.component.html',
  styleUrls: ['./plat-modif.component.css']
})
export class PlatModifComponent {
  protected slug:string='';
  protected plats:Plat[]=[];

  search(){}
}
