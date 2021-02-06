import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import User from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  $users?: Observable<User[]>;
  constructor(private usersService: UsersService){

  }

  ngOnInit(){
    this.getAllUsers();
  }

  getAllUsers(){
    this.$users = this.usersService.getAllUsers();
  }
}
