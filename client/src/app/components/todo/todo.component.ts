import { Component } from '@angular/core';
import { TodoService} from '../../todo.service';
@Component({
  moduleId:module.id,
  selector: 'todo',
  templateUrl: 'todo.component.html',
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
  todos = [];
  constructor(private todoService: TodoService){
    this.todoService.getTodos().subscribe(
      todos => {
        this.todos = todos;
      }
    );
  }
  title: string = 'My Application';
  description: '';
  date: '';
  id: '';
  isView = false;
  isEdit = false;
  isCreate = true;
  name = 'Badmus Seyi';
  selected_person = null;
  selected_todo_name = null;
  person_obj = null;
  todo_obj = null;
  people =[
    {id: 11, name: "Badmus Babayaro"},
    {id: 12, name: "Temi Adenuga"},
    {id: 13, name: "Tope Solanke A"},
    {id: 14, name: "Jiro Bosini"},
    {id: 15, name: "Fikayo Ajayi"},
    {id: 16, name: "Thomoas Edison"},
  ];
  selectedPerson(person){
    this.selected_person = person.name;
    this.person_obj = person;
  }
  selectedTodo(todo){
    this.selected_todo_name = todo.name;
    this.todo_obj = todo;
  }
  createBtn() {
    this.isView = false;
    this.isCreate = true;
    this.isEdit = false;
  }
  viewBtn() {
    this.isView = true;
    this.isCreate = false;
    this.isEdit = false;
  }
  addTodo(event){
    event.preventDefault();
    var todo = {
      name: this.title,
      description: this.description,
      date: this.date,
    }
    this.todoService.addTodo(todo).subscribe(
      todo =>{ this.todos.push(todo);
      this.title = '';this.description='';this.date=''; }
    );
  }
  deleteTodo(id) {
    var todos = this.todos;
    this.todoService.deleteTodo(id).subscribe(
      data =>  {
        if(data.n == 1) {
          for(var i = 0; i < todos.length; i++) {
            if(todos[i]._id == id) {
              todos.splice(i, 1);
            }
          }
        }
        this.todos = todos;
      }
    );
  }
  updateTodo(event) {
    event.preventDefault();
    var _todo = {
      _id: this.id,
      name: this.title,
      description: this.description,
      date: this.date,
    }
    this.todoService.updateTodo(_todo).subscribe(
      todo =>{ 
        for(var i = 0; i < this.todos.length; i++) {
          if(this.todos[i]._id == _todo._id) {
            this.todos[i].name = _todo.name;
            this.todos[i].description = _todo.description;
            this.todos[i].date = _todo.date;
          }
        }
      this.isEdit = false;
      this.isView = true;
      this.id = '';
     }
    );
  }
  editTodo(todo) {
    this.title = todo.name;
    this.description = todo.description;
    this.date = todo.date;
    this.id = todo._id;
    this.isEdit = true;
    this.isView = false;
  }
}
