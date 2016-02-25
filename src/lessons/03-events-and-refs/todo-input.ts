import {Component} from "angular2/core";

@Component({
    selector: 'todo-input',
    template: `<div>
    <input type="text" #myInput>
    <button (click)="clicked(myInput)">Click me</button>
    </div>`
})
export class TodoInput{
    clicked(value){
        console.log(value);
    }
}