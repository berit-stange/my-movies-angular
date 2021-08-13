// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Input } from '@angular/core';

// This import brings in the API calls created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
// used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({ //@ = decorator to tell Angular that the class right below is a component
  //selector defines the custom HTML element, into which this component will render
  selector: 'app-user-registration-form',
  //instructions for wiring up the class with its stylesheet and template file
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = {
    //@ = decorator that defines the component’s input
    //user Data object will be passed to the API call in the registerUser function
    Username: '',
    Password: '',
    Email: '',
    Birthday: ''
  };

  /**
   * @param fetchApiData 
   * @param dialogRef 
   * @param snackBar 
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }


  /**
   * registerUser() - function responsible for sending the form inputs to the backend
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      // Logic for a successful user registration goes here! (To be implemented)
      this.dialogRef.close(); // This will close the modal on success!
      console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
    });
  }


}