import { Component, ElementRef, ViewChild } from '@angular/core';
import { Plat } from 'src/app/models/plat';
import { SearchService } from 'src/app/services/search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  protected plats:Plat[]=[];
  protected slug:string="";

  constructor(private searchService:SearchService){}
   search(){
    this.searchService.search(this.slug).subscribe({
      next:(plats)=>{
        this.plats = plats;
      },
      error:(error)=>{
        console.log(error);
      }
    })
   }
}
