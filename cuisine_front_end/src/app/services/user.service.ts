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

  postUser(user:any,image:File):Observable<any>{

      const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
        const formData = new FormData();
        formData.append('nom',user.nom);
        formData.append('prenom',user.prenom);
        formData.append('email',user.email);
        formData.append('dath_of_birth',user.dath_of_birth);
        formData.append('role',user.role);
        formData.append('image',image);
        formData.append('password',user.password);
        console.log(formData.get('role'));

    return this.http.post<any>(`http://127.0.0.1:8000/api/uers`,formData,{headers});
  }

  putUser(user:any,id:number):Observable<any>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    return this.http.put<any>(`http://localhost:8000/api/users/${id}`,user,{headers});
  }

  showUser(id:number):Observable<User>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });

    return this.http.get<User>(`http://localhost:8000/api/users/${id}`,{headers});
  }

  delUser(id:number):Observable<any>{
    const token = localStorage.getItem('Token');
        const headers = new HttpHeaders({
          'Authorization': `Bearer ${token}`
        });
    return this.http.delete<any>(`http://localhost:8000/api/users/${id}`,{headers});
  }
}
