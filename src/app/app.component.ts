import { Component } from '@angular/core';
import { Employed } from './models/employed';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  employedArray: Employed[] = [
    {id:1, name: "Ryan", country:"USA"},
    {id:2, name: "Angelica", country:"USA"},
    {id:3, name: "Joe", country:"USA"}
];

selectedEmployed: Employed = new Employed();

openForEdit(employed: Employed) {
  this.selectedEmployed = employed;
}

addOrEdit(){
  if(this.selectedEmployed.id == 0){
    this.selectedEmployed.id = this.employedArray.length +1;
    this.employedArray.push(this.selectedEmployed);
  }
  
  this.selectedEmployed = new Employed();

}


Delete() {
  if(confirm('Are you sure you want to delete it?')){
    this.employedArray = this.employedArray.filter(x => x != this.selectedEmployed);
    this.selectedEmployed = new Employed();
  }
}
}
