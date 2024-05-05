import { Component, Input } from '@angular/core';
import { Plat } from 'src/app/models/plat';

@Component({
  selector: 'app-admin-plat-list',
  templateUrl: './admin-plat-list.component.html',
  styleUrls: ['./admin-plat-list.component.css']
})
export class AdminPlatListComponent {
  @Input() plats:Plat[] = [];


}
