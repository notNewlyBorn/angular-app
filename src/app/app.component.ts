import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["angular", "react", "ember"];
  arr = [5, 6, 2, 11, 100, 43];
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

  onSubmitForm(user) {
    console.log(user);
  }
}
