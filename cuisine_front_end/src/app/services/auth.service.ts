import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  userAuth(user:any):Observable<any>{
    return this.http.post<any>(`http://localhost:8000/api/connexion`,user);
  }

  userLogout():Observable<any>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    return this.http.post<any>(`http://localhost:8000/api/deconnexion`,{headers});
  }

}
