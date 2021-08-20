import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lesson-selector',
  templateUrl: './lesson-selector.component.html',
  styleUrls: ['./lesson-selector.component.css'],
})
export class LessonSelectorComponent implements OnInit {
  @Input() item: any;
  @Output() change_lesson = new EventEmitter();

  constructor() {}

  changeLesson() {
    this.change_lesson.emit(this.item);
  }

  ngOnInit(): void {}
}
