import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTaskForm: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTaskForm(): void {
    this.showAddTaskForm = !this.showAddTaskForm;
    this.subject.next(this.showAddTaskForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
