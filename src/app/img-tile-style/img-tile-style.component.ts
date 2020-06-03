import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-img-tile-style',
  templateUrl: './img-tile-style.component.html',
  styleUrls: ['./img-tile-style.component.css']
})
export class ImgTileStyleComponent implements OnInit {

  @Input() imgSrc: string;
  @Input() row: number;
  @Input() col: number;

  constructor() {}

  ngOnInit(): void {
    console.log(this.imgSrc, this.row, this.col);

    console.log('here');
    const grid = document.getElementsByClassName('grid')[0];
    console.log(grid);
    const row = '<div class="row" style="display: flex; flex-direction: row; flex-grow: 1;"></div>';
    const cell = '<div class="cell" style="flex-grow: 1; box-sizing: border-box; border: 1px white solid;"></div>';
    for (let i = 0; i < this.row; i++) {
      grid.insertAdjacentHTML('beforeend', row);
    }
    for (let i = 0; i < this.row; i++) {
      const el = document.getElementsByClassName('row')[i];
      for (let j = 0; j < this.col; j++) {
        el.insertAdjacentHTML('beforeend', cell);
      }
    }
  }

}
