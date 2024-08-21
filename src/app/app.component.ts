import { UserService } from './user/user.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

interface Car {
    id: number;
    name: string;
}

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, RouterLink],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'ng-tut';
    name: string = "baki";
    message: string = "";
    userSerivce = inject(UserService);
    car: Car | undefined = undefined;

    constructor() {
        this.car = this.userSerivce.getCarById(2);
    }

    handleChlidEvent(message: string) {
        this.message = message;
    }
}
