import { Component } from '@angular/core';
import { AuthComponent } from '../auth/auth.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
constructor(private logOut:AuthService){}
  deconnexion(){
    this.logOut.userLogout();
  }
}
