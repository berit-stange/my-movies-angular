import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-director-view',
  templateUrl: './director-view.component.html',
  styleUrls: ['./director-view.component.scss']
})
export class DirectorViewComponent implements OnInit {

  /**
   * director data from database
   * @param data 
   */
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {
      name: string;
      bio: string;
      image: string;
    }
  ) { }

  ngOnInit(): void {
  }

}
