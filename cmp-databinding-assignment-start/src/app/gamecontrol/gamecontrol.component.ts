import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() secondPassed = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  onStartPress() {
    this.interval = setInterval(() => {
      this.secondPassed.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onEndPress() {
    clearInterval(this.interval);
  }

  constructor() { }

  ngOnInit() {
  }

}
