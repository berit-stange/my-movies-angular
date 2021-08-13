import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MovieViewComponent } from '../movie-view/movie-view.component';
import { GenreViewComponent } from '../genre-view/genre-view.component';
import { DirectorViewComponent } from '../director-view/director-view.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  //declare viarable as an array > movies from API
  movies: any[] = [];
  FavoriteMovies: any = {};


  /**
   * 
   * @param fetchApiData 
   * @param dialog 
   * @param snackBar 
   */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    //calling the f. in the lifecycle hook
    //ngOnInit is called, when Angular is done creating the component (= componentDidMount?)
    this.getMovies();
    this.getFavorites();
  }


  /**
   * getMovies() - function to get all movies (fetch movie objects from API)
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies;
    });
  }


  /**
   * openMovieViewDialog() - function to open dialog with movie details
   * @param details 
   */
  openMovieViewDialog(details: string): void {
    this.dialog.open(MovieViewComponent, {
      data: { details },
    });
  }


  /**
   * openGenreViewDialog() - function to open dialog with genre details
   * @param name 
   * @param description 
   */
  openGenreViewDialog(name: string, description: string): void {
    this.dialog.open(GenreViewComponent, {
      data: { name, description },
    });
  }


  /**
   * openDirectorViewDialog() - function to open dialog with director info
   * @param name 
   * @param bio 
   * @param image 
   */
  openDirectorViewDialog(name: string, bio: string, image: string): void {
    this.dialog.open(DirectorViewComponent, {
      data: { name, bio, image },
    });
  }


  /**
   *  getFavorites() - function to fetch movie ids from user object in database
   */
  getFavorites(): void {
    const user = localStorage.getItem('user');
    this.fetchApiData.getUser(user).subscribe((resp: any) => {
      this.FavoriteMovies = resp.FavoriteMovies;
    });
  }


  /**
   * addToFavorites() - function to add movie to list of favorites
   * @param movieId 
   * @returns movieID to push to list of favorites
   */
  addToFavorites(movieId: string): any {
    // const FavoriteMovies = localStorage.getItem('FavoriteMovies');
    this.fetchApiData.addFavorite(movieId).subscribe((resp: any) => {
      this.snackBar.open('Added to favorites!', 'OK', {
        duration: 2000,
      });
      console.log(this.FavoriteMovies);
      // this.FavoriteMovies = resp.FavoriteMovies;
    });
    return this.FavoriteMovies.push(movieId);
  }


  /**
   * isFavorite() - function to check if id is included in list of favorite movies
   * @param movieID 
   * @returns 
   */
  isFavorite(movieID: string) {
    return this.FavoriteMovies.includes(movieID);
  }


}
