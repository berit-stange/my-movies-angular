// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Input } from '@angular/core';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';
// used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-update-form',
  templateUrl: './user-update-form.component.html',
  styleUrls: ['./user-update-form.component.scss']
})
export class UserUpdateFormComponent implements OnInit {

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
    public dialogRef: MatDialogRef<UserUpdateFormComponent>,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  /**
   *  updateUser() - function responsible for sending the form inputs to the backend
   */
  updateUser(): void {
    this.fetchApiData.updateUser(this.userData).subscribe((result) => {
      // Logic for a successful user login goes here! (To be implemented)
      this.dialogRef.close(); // This will close the modal on success!
      localStorage.setItem('user', result.Username);
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
    setTimeout(function () {
      window.location.reload();
    }, 1000);
  }

}
