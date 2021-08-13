// src/app/user-login-form/user-login-form.component.ts
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserUpdateFormComponent } from '../user-update-form/user-update-form.component';

// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})


export class UserProfileComponent implements OnInit {
  //@ = decorator that defines the component’s input
  //user Data object will be passed to the API call in the registerUser function
  @Input() userData = {
    Username: '',
    Password: '',
    Email: '',
    Birthday: ''
  };

  user: any = {};
  movies: any = [];
  FavoriteMovies: any = {};
  favorites: any = [];

  /**
   * @param fetchApiData 
   * @param dialog 
   * @param snackBar 
   * @param router 
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    // public dialogRef: MatDialogRef<UserProfileComponent>,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getUser();
  }


  /**
   * openUserUpdateDialog() - function ot open update dialog
   */
  openUserUpdateDialog(): void {
    this.dialog.open(UserUpdateFormComponent, {
      // Assigning the dialog a width
      width: '280px'
    });
  }


  /**
   * getUser() - function to get user data
   */
  getUser(): void {
    const user = localStorage.getItem('user');
    this.fetchApiData.getUser(user).subscribe((res: any) => {
      this.user = res;
      this.getMovies();
    });
  }


  /**
   * getMovies() - function to get movie data
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((res: any) => {
      this.movies = res;
      this.filterFavorites();
    });
  }

  filterFavorites(): void {
    this.movies.forEach((movie: any) => {
      if (this.user.FavoriteMovies.includes(movie._id)) {
        this.favorites.push(movie);
      }
    });
    return this.favorites;
  }


  /**
   * deleteFavorite() - function to delete movie from list of favorites
   * @param movieId 
   */
  deleteFavorite(movieId: string): void {
    this.fetchApiData.removeFavorite(movieId).subscribe((resp: any) => {
      this.snackBar.open('Removed from list!', 'OK', {
        duration: 2000,
      });
      console.log('after deleteFavorite', this.favorites);
    });
    // console.log(this.favorites);
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  }


  /**
   * deleteUserAccount() - function to delete user account
   */
  deleteUserAccount(): void {
    this.fetchApiData.deleteUser().subscribe((resp: any) => {
      // Logic for a successful user login goes here! (To be implemented)
      // this.dialogRef.close(); // This will close the modal on success!
      // localStorage.setItem('user', result.user.Username);
      // localStorage.setItem('token', result.token);
      // console.log(result);
      this.snackBar.open('Bye bye!', 'OK', {
        duration: 2000
      });
      // this.router.navigate(['movies']);
    }, (result) => {
      console.log(result);
      this.snackBar.open(result, 'OK', {
        duration: 2000
      });
      // Refreshes and redirects to welcome view
      this.router.navigate(['/welcome']).then(() => {
        window.location.reload();
      });
    });
  }

}


