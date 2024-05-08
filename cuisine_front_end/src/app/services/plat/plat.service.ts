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

    return this.http.get<Plat[]>(`http://localhost:8000/api/plats`);
  }

  postPlat(plat:any,image:File):Observable<any>{
   const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        const formData = new FormData();
        formData.append('nom',plat.nom);
        formData.append('description',plat.description);
        formData.append('ingredients',plat.ingredients);
        formData.append('recette',plat.recette);
        formData.append('difficultes',plat.difficultes);
        formData.append('temps',plat.temps);
        formData.append('image',image);
        formData.append('user_id',plat.user_id);

    return this.http.post<any>(`http://localhost:8000/api/plats`,formData,{headers});
  }

  showPlat(id:number):Observable<Plat>{
    return this.http.get<Plat>(`http://localhost:8000/api/plats/${id}`);
  }

  putPlat(id:number,plat:any):Observable<any>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    return this.http.put<any>(`http://localhost:8000/api/plats/${id}`,plat,{headers});
  }

  delPlat(id:number):Observable<any>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    return this.http.delete<any>(`http://localhost:8000/api/plats/${id}`,{headers});
  }
}


