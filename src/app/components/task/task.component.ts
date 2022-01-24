import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;
  
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task): void {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) : void {
    this.onToggleReminder.emit(task);
  }
}
