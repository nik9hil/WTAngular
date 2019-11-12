import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sellx inventory';
  items = [
  ];

  addTodo(item,cat,tot,price){
    var newItem = {
    label: item,
    priority: cat,
    total: tot,
    money: price,
    };
    this.items.push(newItem)
  }

  deleteTodo(item){
    this.items = this.items.filter(t => t.label != item.label);
  }    
}