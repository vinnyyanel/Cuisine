import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plat } from 'src/app/models/plat';

@Injectable({
  providedIn: 'root'
})
export class PlatService {

  constructor(private http:HttpClient) { }

  getPlat():Observable<Plat[]>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    return this.http.get<Plat[]>(`http://localhost:8000/api/plats`,{headers});
  }

  postPlat(plat:any):Observable<any>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    return this.http.post<any>(`http://localhost:8000/api/plats`,plat,{headers});
  }

  showPlat(id:number):Observable<Plat>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    return this.http.get<Plat>(`http://localhost:8000/api/plats/${id}`,{headers});
  }
}
