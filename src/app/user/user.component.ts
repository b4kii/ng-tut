import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    isLogged: boolean = false;

    todos: string[] = [
        "grocery",
        "gym",
        "closet cleaning"
    ];

    isEditable: boolean = true;

    placeholderContent = "Name";

    greet() {
        console.log("hello")
    }

    @Input() pageName = "";

    @Output() childEvent: EventEmitter<string> = new EventEmitter<string>();

    emitToParent() {
        this.childEvent.emit("from children");
    }
}
