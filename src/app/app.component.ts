import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My app';
  obj = {
    id: "12",
    name: "nafis"
  };
  arr = ['some', 'tjhog', 'is not'];
  isTrue = true;
  ok = "okej"
}
