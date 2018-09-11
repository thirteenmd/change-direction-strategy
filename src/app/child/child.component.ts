import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {
  // @Input() data: string[];
  @Input() data: Observable<any>;
  foods: string[] = [];

  constructor(private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.data.subscribe(food => {
      this.foods = [...this.foods, ...food];
      this.changeDetector.markForCheck();
    })
  }

  // refresh() {
  //   this.changeDetector.detectChanges()
  // }

}
