import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
// import { EventEmitter } from 'stream'; !!!!! NOT FROM 'stream' !!!!!

@Component({
  selector: 'app-importance',
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.css'],
})
export class ImportanceComponent implements OnInit, OnChanges {
  @Input() inputFromParent = 0;
  @Input() inputFromParent2 = 0;
  @Input() idFromParent = 0;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() starClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output() starClicked2: EventEmitter<number> = new EventEmitter<number>();

  // id = 0; // do not helps on STAR bug after sorting... :/
  plotis = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.plotis = this.inputFromParent * 15;
    this.plotis = this.inputFromParent2 * 15;
    // this.id = this.idFromParent;
  }
  ngOnInit(): void {
    // this.plotis = this.inputFromParent * 15; // doesn't work OnChanges - only OnInit
  }

  handleRatingClick(rating: number): void {
    this.ratingClicked.emit(
      `Rating ${this.plotis / 15} was clicked. Seen width: "${this.plotis}px".`
    );
  }

  handleStarClick(star: number, starOnId: number): void {
    console.log('STAR: ', star, ' starID: ', starOnId);
    this.starClicked.emit(star);
    this.starClicked2.emit(starOnId);
  }
}
