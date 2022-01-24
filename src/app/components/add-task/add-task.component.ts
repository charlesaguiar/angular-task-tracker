import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTaskForm: boolean = false;
  subscription: Subscription = new Subscription();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe(
      value => this.showAddTaskForm = value
    );
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if(!this.text) {
      alert('Please fill the task text.');
      return;
    }

    this.onAddTask.emit({
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    });

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
