import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-importance',
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.css'],
})
export class ImportanceComponent implements OnInit, OnChanges {
  @Input() inputFromParent = 0;
  @Input() idFromParent = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() ratingClicked2: EventEmitter<number> = new EventEmitter<number>();
  @Output() starClicked: EventEmitter<any> = new EventEmitter<any>();
  plotis = 0;
  // idz: number = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.plotis = this.inputFromParent * 15;
  }
  ngOnInit(): void {
    // this.plotis = this.inputFromParent * 15; // doesn't work OnChanges - only OnInit
  }

  handleRatingClick(rating: number): void {
    this.ratingClicked.emit(
      `Rating ${this.plotis / 15} was clicked. Seen width: "${this.plotis}px".`
    );
    console.log(rating, 'STAR CLICKED!');
  }

  handleStarClick(rating: number, idz: number): void {
    this.starClicked.emit(rating);
    this.ratingClicked2.emit(idz);

    console.log(rating, 'STAR CLICKED!');
  }
}
