import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import { todos } from '../../../routes/tasks.js';

@Injectable()
export class TodoService {

  constructor(private http: Http) {
   }
  getTodos(){
    return this.http.get('/api/todo')
      .map(res => res.json());
  }
  addTodo(todo) {
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/api/todo/todo/', JSON.stringify(todo), {headers:headers})
        .map(res =>res.json());
  }
  deleteTodo(id) {
    return this.http.delete('/api/todo/'+ id)
      .map(res => res.json());
  }
  updateTodo(todo) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('/api/todo/'+todo._id, JSON.stringify(todo), {headers:headers})
      .map(res =>res.json());
  }
}
