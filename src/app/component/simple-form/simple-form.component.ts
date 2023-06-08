import { Component } from '@angular/core';
import { EnrollmentService } from 'src/app/enrollment.service';
import { User } from 'src/app/user';


@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {
  topics = ['CSS', 'HTML', 'Angular'];
  topicHasError = true;

  userModel = new User('Neha', 'neha@gmail.com', 8888990065, 'default', 'morning', true);

  constructor(private _enrollmentService: EnrollmentService){}

  validateTopics(value: string){
    if (value === 'default'){
      this.topicHasError = true;
    }
    else{
      this.topicHasError = false;
    }
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data =>  console.log('Success', data),
        error => console.log('error',error)
      )
  }

}
