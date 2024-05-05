import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }

  getAllUsers():Observable<User[]>{
     const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

        return this.http.get<User[]>(`http://localhost:8000/api/users`,{headers});
  }

  postUser(user:any):Observable<any>{

    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

    return this.http.post<any>(`http://localhost:8000/api/users`,user,{headers});
  }

  putUser(user:any,id:number):Observable<any>{
    return this.http.put<any>(`http://localhost:8000/api/users/${id}`,user);
  }

  showUser(id:number):Observable<User>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

    return this.http.get<User>(`http://localhost:8000/api/users/${id}`,{headers});
  }

  delUser(id:number):Observable<string>{
    return this.http.delete<string>(`http://localhost:8000/api/users/${id}`);
  }
}
