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
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() starClicked: EventEmitter<number> = new EventEmitter<number>();
  plotis = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.plotis = this.inputFromParent * 15;
  }
  ngOnInit(): void {
    // this.plotis = this.inputFromParent * 15;
  }

  handleRatingClick(rating: number): void {
    this.ratingClicked.emit(
      `Rating ${this.plotis / 15} was clicked. Seen width: "${this.plotis}px".`
    );
    console.log(rating, 'STAR CLICKED!');
  }

  handleStarClick(rating: number): void {
    this.starClicked.emit(
      rating
      // `STAR: ${rating} clicked and passed to parent! \n\r Click was made on <div> with "${this.plotis}px" width.`
    );
    console.log(rating, 'STAR CLICKED!');
  }
}
