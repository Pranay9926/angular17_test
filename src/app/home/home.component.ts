import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildOneComponent } from './child-one/child-one.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,ChildOneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLogin = false;
  loginfun(){
    this.isLogin = !this.isLogin
  }
}
