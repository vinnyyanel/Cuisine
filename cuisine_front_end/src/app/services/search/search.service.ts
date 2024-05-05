import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat } from 'src/app/models/plat';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  search(slug:string):Observable<Plat[]>
  {
    return this.http.get<Plat[]>(`http://localhost:8000/api/search/${slug}`);
  }
}
