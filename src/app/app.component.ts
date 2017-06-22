import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["angular", "react", "ember"];
  newItem = "";
  day = new Date();

  pushItem = function() {
    if(this.newItem != "") {
      this.items.push(this.newItem);
      this.newItem = "";
    }
  }

  deleteItem = function(item){
    this.items.splice(item, 1);
  }
  // title = 'My app';
  // obj = {
  //   id: "12",
  //   name: "nafis"
  // };
  // arr = ['some', 'tjhog', 'is not'];
  // isTrue = true;
  // ok = false
}
