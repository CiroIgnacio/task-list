import { Component, OnInit, Input } from '@angular/core';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { TASKS } from 'src/app/mock-task';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() task: Task = TASKS[0];
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

}
