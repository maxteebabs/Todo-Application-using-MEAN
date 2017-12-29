import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../todo.service';
// import { Hero } from '../hero';
@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  constructor(private todoservice: TodoService) { }
  @Input() person = null;
  ngOnInit() {
  }

}
