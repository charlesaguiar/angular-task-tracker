import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Task } from 'src/app/Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    return this.httpClient.delete<Task>(`${this.apiUrl}/${task.id}`);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    return this.httpClient.put<Task>(`${this.apiUrl}/${task.id}`, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.httpClient.post<Task>(this.apiUrl, task, httpOptions);
  }
}
