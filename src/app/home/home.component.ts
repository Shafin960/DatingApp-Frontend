import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode= false;
  users:any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.http.get('https://localhost:7020/api/Users').subscribe({
        next: Response  =>{
            this.users=Response;
        },
        error: error => console.log(error),
      }
    );
  }

  registerToggle(){
    this.registerMode=!this.registerMode;
  }

  cancelRegisterMode(event: boolean){
    this.registerMode=event;
  }

}
