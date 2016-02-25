import {bootstrap} from "angular2/platform/browser";
import {Component} from 'angular2/core';
import {TodoInput} from "./todo-input"


@Component({
    selector: 'app',
    template: `<div><todo-input></todo-input></div>`,
    directives: [TodoInput]
})
class App{}

bootstrap(App);
