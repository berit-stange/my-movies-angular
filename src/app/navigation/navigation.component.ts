import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  logOut(): void {
    localStorage.clear;
    this.snackBar.open('You have logged out!', 'Ok', {
      duration: 2000
    });
  }

}
