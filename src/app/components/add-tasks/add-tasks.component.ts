import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text:string = "";
  date: string = "";
  reminder:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert("Please add a task!")
      return
    }

    const {text, date, reminder} = this
    const newTask = {text, date, reminder}
    this.onAddTask.emit(newTask);
  }


}
