import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User()
  submitted = false;

  constructor(private userService: UserService,private router:Router) { }

  ngOnInit(): void {
    this.submitted = false;
  }

  save(): void {
   
    this.userService.register(this.user).subscribe(
      data => {
        console.log(data);
      
        this.user=new User()
       // this.router.navigate(['/login']);
       
      },
      
        error => console.log(error));
    
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
 
}
