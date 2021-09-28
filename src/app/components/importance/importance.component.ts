import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-importance',
  templateUrl: './importance.component.html',
  styleUrls: ['./importance.component.css'],
})
export class ImportanceComponent implements OnInit, OnChanges {
  @Input() inputFromParent = 0;
  plotis = 0;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    this.plotis = this.inputFromParent * 15;
  }
  ngOnInit(): void {
    this.plotis = this.inputFromParent * 15;
  }
}
