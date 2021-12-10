import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username:any;
  public mobile:any;
 
 
 
   constructor(private router:Router) { }
 
   ngOnInit(): void {
   }
 
   
  login(){
   if(this.username==null && this.mobile==null){
     console.log("Please fill details first !!");
     window.alert("Details are mandatory for Start Quiz !!");
   }
   else{
     
     console.log("Welcome to Quiz !!");
     this.router.navigate(['/quiz']);
   }
 }
}